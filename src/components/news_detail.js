import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/css/news.css'
import {Link} from 'react-router'
import {connect} from 'react-redux'


class NewsDetail extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            list:[]
        };
        this.getData=this.getData.bind(this);
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        let {showloading,hideloading}=this.props;
        showloading();
        let n=this.props.router.location.query.a;
        let url='src/data/newsdata.json';
        fetch(url).then((data)=>{
            if(data.ok){
                hideloading();
                data.json().then((data)=>{
                    //console.log(data[n].list);
                    this.setState({
                        name:data[n].t,
                        list:data[n].list
                    })
                })
            }
        });
    }
    render(){
        let n=this.props.router.location.query.a;
        let now=this.props.params.aid;
        let list=this.state.list;
        let num=parseInt(now);
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>{this.state.name}</h2>
                        <div className="head_right"><Link to={{pathname:'news_list/'+n}}>返回列表</Link></div>
                    </div>
                </header>

                <div className="news_view w">
                    <h1>{list.length!=0?list[now].t:''}</h1>
                    <div className="news_tags"><span>时间：2015-07-21 09:13:19</span><span>来源：{list.length!=0?list[now].content.orign:''}</span><span>浏览：{list.length!=0?list[now].content.n:''}次</span></div>
                    <div className="news_content">
                        <span style={{textAlign:'center', width:'100%',float:'left'}}><img src={list.length!=0?list[now].content.src:''} /></span>
                        <div dangerouslySetInnerHTML={{__html:list.length!=0?list[now].content.c:''}}>

                        </div>
                    </div>
                    <div className="news_key"><span style={{color:'#666'}}>标签:</span><a href="#">一起惠</a><a href="#">滴滴顺风车</a><a href="javascript:;">返利网</a></div>
                    <div className="news_more">
                        <div className="news_next"><span>上一篇：</span><Link to={{pathname:'news_detail/'+(num-1),query:{a:n}}}>{num==0?'已经到第一篇了':list.length!=0?list[num-1].t:''}</Link></div>
                        <div className="news_next"><span>下一篇：</span><Link to={{pathname:'news_detail/'+(num+1),query:{a:n}}}>{num==9?'已经到最后一篇了':list.length!=0?list[num+1].t:''}</Link></div>
                    </div>
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
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsDetail)