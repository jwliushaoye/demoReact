import React,{Component} from 'react'
import {Link} from 'react-router'

class FootOne extends Component{
    render(){
        return (
            <div className="m_user w">
                <Link to='login'> 登录</Link>
                <Link to='register'> 注册</Link>
                <a href="javascript:;" className="backtop">返回顶部</a>
            </div>
        )
    }
}

export default FootOne