import React,{Component} from 'react'
import {Link} from 'react-router'

class FootTwo extends Component{
    render(){
        return (
        <div>
            <div className="footer w">
                <Link to='home'><div className="ico_img"><img src="/src/assets/images/178hui-app.png"/></div><span style={{color:'#00bb9c'}}>客户端</span></Link>
                <a href="javascript:;"><div className="ico_img"><img src="/src/assets/images/178hui-shouji.png"/></div><span style={{color:'#eb4f38'}}>触摸版</span></a>
                <a href="javascript:;"><div className="ico_img"><img src="/src/assets/images/178hui-diannao.png" /></div><span>电脑版</span></a>
            </div>
            <div className="copyright">Copyright © 2012-2015</div>
        </div>
        )
    }
}

export default FootTwo