import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/frozenui/css/frozen.css'
import '../assets/css/news.css'
import Search from './search'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class NewsList extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            name:''
        };
        this.getData=this.getData.bind(this)
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        let {showloading,hideloading}=this.props;
        showloading();
        let now=this.props.params.aid;
        let url='src/data/newsdata.json';
        fetch(url).then((data)=>{
            if(data.ok){
                hideloading();
                data.json().then((data)=>{
                    //console.log(data[now].list)
                    this.setState({
                        name:data[now].t,
                        list:data[now].list
                    })
                })
            }
        });
    }
    render(){
        let list=this.state.list;
        let name=this.state.name;
        let now=this.props.params.aid;
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>{name}</h2>
                        <div className="head_right"><Link to='news_index'>返回资讯</Link></div>
                    </div>
                </header>

                <Search/>

                <div className="news_index w">
                    <ul className="ui-list ui-list-text ui-border-tb">
                        {
                            list.map((val,index)=>{
                                return(
                                    <Link to={{pathname:'news_detail/'+index,query:{a:now}}} key={index}>
                                        <li className="ui-border-t list">
                                            <div className="ui-list-info">
                                                <h4>{val?val.t:''}</h4>
                                            </div>
                                            <div className="ui-badge-muted">{val?val.n:''}</div>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <div className="bl_more"><a href="javascript:;">加载更多</a></div>
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
)(NewsList)