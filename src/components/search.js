import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
import '../assets/css/datalist.css'
import {Link} from 'react-router'

class Search extends Component{
    render(){
        return (
            <div className="search w">
                <form action="" method="get">
                    <Link to='searchdetail'><input type="text" className="search_input" placeholder="请输入您想要查找的爆料"/></Link>
                    <input type="button" className="search_submit" value="搜索"/>
                </form>

            </div>
        )
    }
}

export default Search