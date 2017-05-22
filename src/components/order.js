import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/css/user.css'
import {Link} from 'react-router'

class Order extends Component{
    render(){
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>站内消息</h2>
                        <div className="header_right shaixuan"><Link to='home'><img src="/src/assets/images/iconfont-shouye.png"/></Link></div>
                    </div>
                </header>
               

                <div className="msg w">
                    <div className="msg_title"><h1>订单确认通知</h1><span>2015-08-03 11:11:40</span></div>
                    <div className="msg_content">您好：您的订单9454080333已经确认！您好：您的订单9454080333已经确认！您好：您的订单9454080333已经确认！</div>
                </div>
                <div className="msg w">
                    <div className="msg_title"><h1>订单确认通知</h1><span>2015-08-03 11:11:40</span></div>
                    <div className="msg_content">您好：您的订单9454080333已经确认！</div>
                </div>
                <div className="msg w">
                    <div className="msg_title"><h1>订单确认通知</h1><span>2015-08-03 11:11:40</span></div>
                    <div className="msg_content">您好：您的订单9454080333已经确认！</div>
                </div>
                <div className="msg w">
                    <div className="msg_title"><h1>订单确认通知</h1><span>2015-08-03 11:11:40</span></div>
                    <div className="msg_content">您好：您的订单9454080333已经确认！</div>
                </div>
                <div className="msg w">
                    <div className="msg_title"><h1>订单确认通知</h1><span>2015-08-03 11:11:40</span></div>
                    <div className="msg_content">您好：您的订单9454080333已经确认！</div>
                </div>
            </div>
        )
    }
}

export default Order