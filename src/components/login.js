import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/frozenui/css/frozen.css'
import '../assets/css/login.css'
import {Link}  from 'react-router'



class Login extends Component{
    constructor(){
        super();
        this.login=this.login.bind(this);
        this.state={
            result:''
        }
    }
    componentDidMount(){
        // $(document).ready(function(){
        //     $("form").submit(function(e){
        //         var username = $.trim($("#username").val());
        //         var password = $.trim($("#password").val());
        //         if(username == ''){
        //             layer.tips('请输入用户名/邮箱/手机号码','#username', {tips: 3});
        //             return false;
        //         }else if(password == ''){
        //             layer.tips('请输入登录密码','#password', {tips: 3});
        //             return false;
        //         }
        //     });
        // });
    }
    login(){

         let username=this.refs.username.value;
         let password=this.refs.password.value;

        let url='http://localhost:27017/user?act=login&username='+username+'&password='+password;
        fetch(url).then((data)=>{
            if(data.ok){
                data.json().then((data)=>{
                    console.log(data)
                    if(data.error==0){
                        this.setState({
                            result:'登陆成功'
                        })
                    }
                })
            }
        })
    }
    render(){
        return (
            <div className="log">
                <header>
                    <div className="header"> <a className="new-a-back" href="javascript:history.back();"> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>马上惠返利网·登录</h2>
                    </div>
                </header>


                <div className="w main">
                    <form id="frm_login" method="get" action="">
                        <div className="item item-username">

                            <input id="username" ref="username" className="txt-input txt-username" type="text" placeholder="请输入用户名/邮箱/手机号"/>

                                <b className="input-close" style={{display: 'none'}}></b>
                        </div>
                        <div className="item item-password">

                            <input id="password" ref="password" className="txt-input txt-password ciphertext" type="password" placeholder="请输入密码" style={{display: 'inline'}}/>
                                {/*<input id="ptext" className="txt-input txt-password plaintext" type="text" placeholder="请输入密码" style={{display: 'none'}} name="ptext"/>*/}
                                    <b className="tp-btn btn-off"></b>
                        </div>

                        <div>{this.state.result}</div>

                        <div className="item item-login-option">
                            <div className="aoutlogin">
                                <label className="ui-checkbox ui-checkbox-s">
                                    <input type="checkbox" name="checkbox"/>一个月内免登录
                                </label>
                            </div>
                            <span className="retrieve-password"> <a className="" href="getpwd_email.html"> 找回密码</a> </span>
                        </div>
                        <div className="ui-btn-wrap" onClick={this.login}><input value="用户登录"  className="ui-btn-lg ui-btn-primary"/> </div>
                        <div className="ui-btn-wrap">
                            <Link to='register'><span className="ui-btn-lg ui-btn-danger">没有账号?立即注册</span></Link>
                        </div>
                        <div className="item item-login-other">
                            <dl>
                                <dt>其它登录方式</dt>
                                <dd> <a className="qq" href="#"> <span><img alt="" src="/src/assets/images/login_qq.png" width="40" height="40"/></span> </a> </dd>
                            </dl>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login