import React,{Component} from 'react'
import {Link} from 'react-router'
import '../assets/css/error.css'


class Error extends Component{
    render(){
        return(
            <div className="e_box">
                <i>404</i>
                <img src="http://m.178hui.com/static/images/3.22.gif"/>
                <h3>SORRY!你要访问的页面弄丢了</h3>
                <h2>你可以通过一下方式重新访问...</h2>
                <div>
                    <a onClick={this.props.router.goBack}>返回上一页</a>
                    <Link to="taobao" >商城返利</Link>
                    <Link to="baoliao">优惠爆料</Link>
                    <Link to="home">返回首页</Link>
                </div>
            </div>
        )
    }
}

export default Error