import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/css/user.css'
import {Link} from 'react-router'


class User extends Component{
    componentDidMount(){
        $(".login_out").click(function(){
            layer.confirm('您确定要退出吗？',  {skin: 'layui-layer-molv',offset: '30%'}, function(index){
                layer.close(index);
                layer.msg('拜拜！欢迎下次光临！', { time: 1500,icon:5},function(){
                    window.location='index.html';
                });
            });
        });
    }
    render(){
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>会员中心</h2>
                        <div className="header_right shaixuan"><Link to='home'><img src="/src/assets/images/iconfont-shouye.png"/></Link></div>
                    </div>
                </header>

                <div className="user_top w">
                    <div className="user_logo"><div className="img"><img src="/src/assets/images/user_logo.jpg"/></div></div>
                    <div className="user_info">
                        <div className="user_name">忆乡人</div>
                        <div className="user_dengji">会员等级：黄金会员</div>
                    </div>
                </div>
                <div className="user_nav_list w">
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <div className="u_nav_icon money"></div>
                                <div className="u_nav_name">我的现金</div>
                                <div className="nt_icon"></div>
                                <div className="u_money"><i>0.00元</i></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className="u_nav_icon huibi"></div>
                                <div className="u_nav_name">我的惠币</div>
                                <div className="nt_icon"></div>
                                <div className="u_money"><i>0.00个</i></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className="u_nav_icon tixian"></div>
                                <div className="u_nav_name">金额提现</div>
                                <div className="nt_icon"></div>
                                <div className="u_money"><i>0.00元</i></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className="u_nav_icon tixian"></div>
                                <div className="u_nav_name">惠币兑换</div>
                                <div className="nt_icon"></div>
                                <div className="u_money"><i>0个</i></div>
                            </a>
                        </li>
                        <li>
                            <Link to='order'>
                                <div className="u_nav_icon dingdan"></div>
                                <div className="u_nav_name">我的订单</div>
                                <div className="nt_icon"></div>
                                <div className="u_money"><i>0笔</i></div>
                            </Link>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className="u_nav_icon qiandao"></div>
                                <div className="u_nav_name">我的签到</div>
                                <div className="nt_icon"></div>
                                <div className="u_money"><i>今天您未签到</i></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className="u_nav_icon znx"></div>
                                <div className="u_nav_name">站内消息</div>
                                <div className="nt_icon"></div>
                                <div className="u_money"><i>3条</i></div>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <div className="u_nav_icon anquan"></div>
                                <div className="u_nav_name">安全中心</div>
                                <div className="nt_icon"></div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="login_out w">
                    <a href="javascript:;"><span><img src="/src/assets/images/iconfont-tuichu.png"/></span><i>安全退出</i></a>
                </div>
            </div>
        )
    }
}

export default User