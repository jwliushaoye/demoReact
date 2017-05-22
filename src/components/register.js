import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/css/login.css'
import {Link}  from 'react-router'

class Register extends Component{
    render(){
        return (
            <div className="log">
                <header>
                    <div className="header"> <a className="new-a-back" href="javascript:history.back();"> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>马上惠返利网·注册</h2>
                    </div>
                </header>


                <div className="w main">
                    <form id="frm_login" method="post" action="">
                        <div className="item item-username">
                            <input id="username" className="txt-input txt-username" type="text" placeholder="请输入用户名"  name="username"/>
                                <b className="input-close" style={{display:'none'}}></b> </div>
                        <div className="item item-password">
                            <input id="password" className="txt-input txt-password ciphertext" type="password" placeholder="请输入密码" name="password" style={{display: 'inline'}}/>
                                <input id="ptext" className="txt-input txt-password plaintext" type="text" placeholder="请输入密码" style={{display:'none'}} name="ptext"/>
                                    <b className="tp-btn btn-off "></b> </div>
                        <div className="item item-password">
                            <input id="password_PwdTwo" className="txt-input txt-password_PwdTwo ciphertext_PwdTwo" type="password" placeholder="确认密码" name="password_PwdTwo" style={{display: 'inline'}}/>
                                <input id="ptext_PwdTwo" className="txt-input txt-password_PwdTwo plaintext_PwdTwo" type="text" placeholder="确认密码" style={{display:'block'}} name="ptext_PwdTwo"/>
                                    <b className="tp-btn_PwdTwo btn-off_PwdTwo"></b> </div>
                        <div className="item item-username">
                            <input id="username" className="txt-input txt-username" type="text" placeholder="请输入邮箱" name="username"/>
                                <b className="input-close" style={{display:'none'}}></b> </div>
                        <div className="item item-username">
                            <input id="username" className="txt-input txt-username" type="text" placeholder="请输入QQ号码" name="username"/>
                                <b className="input-close" style={{display:'none'}}></b> </div>
                        <div className="item item-captcha">
                            <div className="input-info">
                                <input id="validateCode" className="txt-input txt-captcha" type="text" placeholder="验证码" autoComplete="off" maxLength="6" size="11"/>
                                    <b id="validateCodeclose" className="input-close"  style={{display: 'block', marginRight:'15px'}}></b> <span id="captcha-img"> <img id="code" src="/src/assets/images/code.jpg" style={{width:'63px',height:'25px'}} /> </span> </div>
                            <div className="err-tips"> 注册即视为同意 <a href="javascript:;">用户服务协议</a> </div>
                        </div>
                        <Link to='register_ok'><div className="ui-btn-wrap"> <a className="ui-btn-lg ui-btn-primary" href="#">用户注册</a> </div></Link>
                        <div className="ui-btn-wrap">
                            <Link to='login'><span className="ui-btn-lg ui-btn-danger">已有账号?立即登录</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register