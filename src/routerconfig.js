import React from 'react'
import {Route,Router,hashHistory,IndexRoute,Redirect} from 'react-router'

import App from './components/app'
import BaoLiao from './components/baoliao'
import BaoLiao_Detail from './components/baoliao_detail'
import Home from './components/home'
import HotShop from './components/hotshop'
import Login from './components/login'
import Register from './components/register'
import User from './components/user'
import NewsIndex from './components/news_index'
import NewsDetail from './components/news_detail'
import NewsList from './components/news_list'
import Order from './components/order'
import TaoBaoReturn from './components/taobao'
import Error from './components/error'
import SearchDetail from './components/searchdetail'
import RegisterOk from './components/register_ok'


const RouterConfig=()=>{
    return (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='home' component={Home}/>
                <Route path='baoliao' component={BaoLiao}/>
                <Route path='baoliao_detail' component={BaoLiao_Detail}>
                    <Route path=':aid' component={BaoLiao_Detail}/>
                </Route>
                <Route path='hotshop' component={HotShop}/>
                <Route path='login' component={Login}/>
                <Route path='register' component={Register}/>
                <Route path='user' component={User}/>
                <Route path='news_index' component={NewsIndex}/>
                <Route path='news_detail' component={NewsDetail}>
                    <Route path=':aid' component={NewsDetail}/>
                </Route>
                <Route path='news_list' component={NewsList}>
                    <Route path=':aid' component={NewsList}/>
                </Route>
                <Route path='register_ok' component={RegisterOk}/>
                <Route path='order' component={Order}/>
                <Route path='taobao' component={TaoBaoReturn}/>
                <Route path='error' component={Error}/>
                <Route path='searchdetail' component={SearchDetail}/>
                <Redirect from="*" to="error"/>
            </Route>
        </Router>
    )
};

export default RouterConfig