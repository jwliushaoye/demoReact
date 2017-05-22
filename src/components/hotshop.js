import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/css/index.css'
import Search from './search'



class HotShop extends Component{
    render(){
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span>
                        <img src="/src/assets/images/iconfont-fanhui.png"/>
                    </span> </a>
                        <h2>商城返利</h2>
                    </div>
                </header>

                <Search/>

                <div className="m_mall w">
                    <div className="mall_list">
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.jd.com.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/1110/14542624089.jd" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.amazon.cn.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/0427/16595789629.gif" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2015/0506/17143913934.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.gome.com.cn.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2015/0211/16471979498.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/0427/17020977409.gif" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.jd.com.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/1110/14542624089.jd" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.amazon.cn.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/0427/16595789629.gif" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2015/0506/17143913934.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/mall_logo/www.gome.com.cn.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2015/0211/16471979498.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/0427/17020977409.gif" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2015/0211/16471979498.png" /></div><span>最高返 <i>2.8%</i></span></a>
                        <a href="javascript:;" className="list_mall"><div className="mall_logo"><img src="http://www.178hui.com/upload/2014/0427/17020977409.gif" /></div><span>最高返 <i>2.8%</i></span></a>
                    </div>
                    <div className="m_more"><a href="javascript:;">加载更多</a></div>
                </div>
            </div>
        )
    }
}

export default HotShop
