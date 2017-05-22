import React,{Component} from 'react'
import '../assets/css/index.css'
import {Link} from 'react-router'


class Nav extends Component {
    render(){
        return(
            <div className="header">
                <div className="m_logo"><img src="/src/assets/images/newlogo.png"/></div>
                <div className="m_search"><Link to="searchdetail"><img src="/src/assets/images/m-index_05.png" width="40"/></Link></div>
            </div>
        )
    }
}

export default Nav
