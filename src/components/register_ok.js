import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/css/login.css'
import '../assets/frozenui/css/frozen.css'

class RegisterOk extends Component{
    render(){
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" href="javascript:history.back();"> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>注册成功</h2>
                    </div>
                </header>
           

                <div className="w main">
                    <div className="register_verify">
                        <div className="ok_iocn"><img src="/src/assets/images/iconfont-iconxianluyudingchenggong.png" height="80"/></div>
                        <h1>恭喜您！已成功注册马上惠返利网！</h1>
                        <h2>邮箱激活验证已经发送到您的邮箱，请尽快验证！</h2>
                        <h3>如果您没收到邮件，请查看垃圾邮件箱或点击<br/></h3>
                        <h3><a href="javascript:;"><img src="/src/assets/images/cxfsjhyj.png" height="40"/></a></h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterOk