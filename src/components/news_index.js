import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/frozenui/css/frozen.css'
import '../assets/css/news.css'
import Search from './search'
import {Link} from 'react-router'
import {connect} from 'react-redux'

class NewsIndex extends Component{
    constructor(){
        super();
        this.state={
            indexList:[]
        },
        this.getData=this.getData.bind(this);
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        let {showloading,hideloading}=this.props;
        showloading();
        let url='http://localhost:27017/newsindex';
        fetch(url).then((data)=>{
            if(data.ok){
                hideloading();
                data.json().then((data)=>{
                    this.setState({
                        indexList:data
                    })
                })
            }
        })
    }
    render(){
        let indexList=this.state.indexList;
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>购物资讯</h2>
                        <div className="head_right" style={{top:'13px',color:'#FFFFFF', fontSize:'14px'}}><Link to='home'>返回首页</Link></div>
                    </div>
                </header>

                <Search/>

                <div className="news_index w">
                    <ul className="ui-list ui-border-tb">
                        {
                            indexList.map((val,index)=>{
                                return (
                                    <Link to={{pathname:'news_list/'+index}} key={index} >
                                        <li>
                                            <div className="ui-avatar-lg list_left">
                                                <span style={{background:'url(src/assets/images/news_0'+index+'.png)',backgroundSize:'contain'}}></span>
                                            </div>
                                            <div className="ui-list-info ui-border-t">
                                                <h4>{val?val.t:''}</h4>
                                                <p>{val?val.describe:''}</p>
                                                <div className="ui-badge">{val?val.num:''}</div>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            })
                        }

                    </ul>
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
)(NewsIndex)