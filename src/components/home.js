import React,{Component} from 'react'
import {Link} from 'react-router'
import '../assets/css/public.css'
import '../assets/css/index.css'
import GoodsList from './goodslist'
import {connect} from 'react-redux'
import Silder from './silder'


class Home extends Component {
    constructor(){
        super();
        this.state={
            arr:[]
        };
        this.getDate=this.getDate.bind(this);
    }
    componentDidMount(){
        $(window).scroll(function () {
            let scrollHeight = $(document).height();
            let scrollTop = $(window).scrollTop();
            let $windowHeight = $(window).innerHeight();
            scrollTop > 75 ? $(".gotop").fadeIn(200).css("display","block") : $(".gotop").fadeOut(200).css({"background-image":"url(/src/assets/images/iconfont-fanhuidingbu.png)"});
        });
        this.getDate();
    }
    getDate(){
        let {showloading,hideloading}=this.props;
        showloading();
        let url='http://localhost:27017/product';
        fetch(url).then((data)=>{
            if(data.ok){
                hideloading();
                data.json().then((data)=>{
                    //console.log(data);
                    this.setState({
                        arr:data
                    })
                })
            }
        })
    }

    render(){
        return(
            <div className="home">

                <div className="top w">

                   <Silder/>

                    <div className="m_nav">
                        <Link  to='error'><img src="/src/assets/images/m-index_10.png"/><span>商城返利</span></Link>
                        <Link to='baoliao'><img src="/src/assets/images/m-index_12.png"/><span>优惠爆料</span></Link>
                        <Link to='taobao'><img src="/src/assets/images/m-index_14.png"/><span>淘宝返利</span></Link>
                        <Link to='news_index'><img src="/src/assets/images/m-index_16.png"/><span>购物资讯</span></Link>
                        <Link  to='error'><img src="/src/assets/images/m-index_22.png"/><span>比价网</span></Link>
                        <Link to='error'><img src="/src/assets/images/m-index_24.png"/><span>有奖签到</span></Link>
                        <Link to='order'><img src="/src/assets/images/m-index_26.png"/><span>订单管理</span></Link>
                        <Link to="user"><img src="/src/assets/images/m-index_27.png"/><span>会员中心</span></Link>
                    </div>
                </div>
                <div className="m_mall w">
                    <div className="mall_title"><span>热门商城</span><em>
                        <Link to='hotshop'>更多</Link>
                    </em></div>
                    <div className="mall_list">
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.jd.com.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/1110/14542624089.jd" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.amazon.cn.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/0427/16595789629.gif" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2015/0506/17143913934.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.gome.com.cn.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2015/0211/16471979498.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/0427/17020977409.gif" /></div><span>最高返 <i>2.8%</i></span></a>
                    </div>
                </div>
                <div className="m_baoliao w">
                    <div className="baoliao_title"><span>最新爆料</span><em><a href="#"><img src="/src/assets/images/iconfont-shuaxin.png"/></a></em></div>

                    <div className="baoliao_list">


                            <GoodsList arr={this.state.arr}/>


                    </div>

                    <div className="bl_more"><a href="javascript:;">加载更多</a></div>
                </div>
                <div className="gotop backtop" style={{display:'none'}}></div>
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
)(Home)