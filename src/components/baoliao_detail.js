import React,{Component} from 'react'
import '../assets/css/baoliao.css'
import '../assets/frozenui/css/frozen.css'
import '../assets/css/public.css'
import Search from './search'
import Commit from './commit'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Time,Name} from '../filters'


class BaoLiao_Detail extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            comment:[],
            guess:[]
        };
        this.getData=this.getData.bind(this);
    }
    getData(){
        let {showloading,hideloading}=this.props;
        showloading();
        let url='src/data/goodsdetail.json';
        fetch(url).then((data)=>{
            if(data.ok){
                hideloading();
                data.json().then((data)=>{
                    //console.log(data)
                    this.setState({
                        data:data,
                    })
                })
            }
        })
    }
    componentDidMount(){
        this.getData();
    }
    render(){
        let now=this.props.params.aid;
        let data=this.state.data;
        let newArr=data[now];
        let comment=data.length==0?'':data[now].comment;
        let guess=data.length==0?'':data[now].guess;
       // console.log(comment)
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}><span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>爆料详情</h2>
                        <div className="head_right" style={{top:'13px'}}>
                            <Link to="baoliao">返回列表</Link>
                        </div>
                    </div>
                </header>

                <Search/>

                <div className="view w">
                    <div className="bl_view_img"><img src={newArr?newArr.src:''} /></div>
                    <div className="bl_view_title"><span className="bl_type">白菜</span><span className="bl_type" style={{backgroundColor:'#53bf1e'}}>活动</span><span className="bl_type" style={{backgroundColor:'#00bb9c'}}>优质</span>{newArr?newArr.title:''}</div>
                    <div className="bl_view_note">{newArr?newArr.phone:''}</div>
                    <div className="bl_view_tag">
                        <div className="bl_view_price">{newArr?newArr.np:''}</div>
                        <div className="bl_view_oprice">{newArr?newArr.op:''}</div>
                        <div className="bl_view_mall">商城：{newArr?newArr.mall:''}</div>
                    </div>
                    <div className="bl_view_tag">
                        <div className="bl_view_user">爆料者：{newArr?Name(newArr.facter):''}</div>
                        <div className="bl_view_time">人气：{newArr?newArr.rq:''}次浏览</div>
                    </div>
                    <div className="bl_view_tag">
                        <div className="bl_view_user">喜欢：{newArr?newArr.fav:''}人喜欢</div>
                        <div className="bl_view_time">时间：{newArr?Time(newArr.time,1):''}</div>
                    </div>
                    <div className="go_buy"><a href="http://www.jd.com">直达链接</a></div>
                </div>

                <div className="bl_view_content w">
                    <h1>推荐理由<span>优质爆料QQ群①：186666517</span></h1>
                    <div className="bl_view_word">
                        <p dangerouslySetInnerHTML={{__html:newArr?newArr.reason:''}}>
                        </p>
                        <p>
                            <strong>京东6月17日活动秒杀  10点 61.8元秒杀</strong>
                        </p>
                        <p>
                            <img src="http://baoliao.178hui.com/upload/shaidan/20150617/1434503287905.jpg"  />
                        </p>
                    </div>
                </div>

                <div className="bl_comment w">
                    <h1>猜您还喜欢</h1>
                    <div className="comment_list">
                        <ul className="ui-list ui-border-tb">
                            {
                                guess!=''?guess.map((val,index)=>{
                                    return (
                                        <li key={index}>
                                            <div className="ui-list-thumb ui-avatar-s">
                                                <span><img src={val?val.src:''} /></span>
                                            </div>
                                            <div className="ui-list-info ui-border-t">
                                                <h4>{val?val.title:''}</h4>
                                                <p>{val?val.phone:''}</p>
                                                <p style={{color:'#FF6600'}}>{val?val.np:''}</p>
                                            </div>
                                        </li>
                                    )
                                }):''
                            }
                        </ul>
                    </div>
                </div>

                <Commit comment={comment}/>

                <div className="bl_comment w">
                    <h1>TA们的牛评（{comment!=''?comment.length:''}）</h1>
                    <div className="comment_list">
                        <ul>
                            {
                                comment!=''?comment.map((val,index)=>{
                                    return(
                                        <li key={index}>
                                            <div className="pl_user_img"><img src={val.s} /></div>
                                            <div className="pl_user_top">
                                                <div className="pl_user_name">{val?Name(val.n):''}</div>
                                                <div className="pl_user_time">5天前</div>
                                            </div>
                                            <div className="pl_user_comment">{val.c}</div>
                                        </li>
                                    )
                                }):''
                            }
                        </ul>
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
)(BaoLiao_Detail)