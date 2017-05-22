import React,{Component} from 'react'
import '../assets/css/searchdetail.css'
import fetchJsonp from 'fetch-jsonp'
import {connect} from 'react-redux'

class SearchDetail extends Component{
    constructor(){
        super();
        this.state={
            dataList:[],
            iptvalue:'',
            show:true,
            arr:[]
        };
        this.getData=this.getData.bind(this);
        this.search=this.search.bind(this);
        this.opento=this.opento.bind(this);
        this.focus=this.focus.bind(this);
        this.hot=this.hot.bind(this);
    }
    componentDidMount(){
        let {showloading,hideloading}=this.props;
        showloading();
        let url='http://localhost:27017/hotsearch';
        fetch(url).then((data)=>{
            if(data.ok){
                setTimeout(()=>{
                    hideloading();
                },500);
                data.json().then((data)=>{
                    this.setState({
                        arr:data
                    })
                })
            }
        });
        this.getData();
        this.refs.val.focus()
    }
    getData(){
        let data=this.refs.val.value;
        this.setState({
            iptvalue:this.refs.val.value
        });
        let url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/u?wd='+data;
        fetchJsonp(url,{
            jsonpCallback:'cb'
        }).then((data)=>{
            if(data.ok){
                data.json().then((data)=>{
                   this.setState({
                       dataList:data.s
                   })
                })
            }
        });

    }
    focus(){
        this.setState({
            show:true,
        });
    }
    hot(ev){
        this.setState({
            iptvalue:ev.target.value
        });
        window.location.href ='https://www.baidu.com/s?wd='+this.state.iptvalue
    }
    opento(val){

        location.href ='https://www.baidu.com/s?wd='+val
    }
    search(){
        if(this.state.iptvalue==''){
            window.location.href='http://www.baidu.com'
        }else {
            this.setState({
                show:false
            });
            window.location.href ='https://www.baidu.com/s?wd='+this.state.iptvalue
        }
    }
    render(){
        //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/u?wd=b

        let dataList=this.state.dataList;
        let show=this.state.show;
        return(
            <div className="search_detail">
                <div className="div1">
                    <a onClick={this.props.router.goBack}>返回</a>
                    <input type="text" className="ipt1" onChange={this.getData} ref='val' onKeyUp={this.update} onFocus={this.focus}/>
                    <input type="button" value='搜索' className="ipt2" onClick={this.search}/>
                    <ul style={show?{display:'block'}:{display:'none'}}>
                        {
                            dataList.map((val,index)=>{
                                return (
                                    <li
                                        key={index}
                                        onClick={this.opento.bind(null,val)}
                                    >
                                        <a href="javascript:;">{val}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="div2">
                    <p>热门搜索</p>
                    {
                        this.state.arr.map((val,index)=>{
                            return (
                                <a href="javascript:;" key={index+20} onClick={this.hot}>{val.key}</a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        showLoading:state.showLoading
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        showloading:()=>{
            dispatch({
                type:'SHOW_LOADING'
            })
        },
        hideloading:()=>{
            dispatch({
                type:'HIDE_LOADING'
            })
        }
    }
};;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchDetail)