import React,{Component} from 'react'
import Nav from './nav'
import FootOne from './foot1'
import FootTwo from './foot2'
import {connect} from 'react-redux'
import Loading from './loading'
import '../assets/css/animate.css'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'



class App extends Component {
    componentDidMount(){
        this.props.router.replace('home');
        $('.backtop').click(function (e) {
            $(".gotop").css({"background-image":"url(/src/assets/images/iconfont-fanhuidingbu_up.png)"});
            e.preventDefault();
            $('html,body').animate({ scrollTop:0});
        });

    }
    render(){

        let path=this.props.router.location.pathname;
        let {showLoading,showNav,showFootOne,showFootTwo,shownav,hidenav,showfootone,hidefootone,showfoottwo,hidefoottwo}=this.props;
        if(/home/.test(path)){
            setTimeout(()=>{
                shownav();
                showfootone();
                showfoottwo()
            },0)
        }else if(/error|searchdetail|firstpage/.test(path)){
            setTimeout(()=>{
                hidefoottwo();
                hidenav();
                hidefootone()
            },0)
        }else if(/user|order|register_ok/.test(path)){
            setTimeout(()=>{
                hidenav();
                hidefootone();
            },0)
        }else{
            setTimeout(()=>{
                hidenav();
                showfootone();
                showfoottwo()
            },0)
        }
        return(
            <div className="mobile">
                {showLoading? <Loading/> :''}
                {showNav?<Nav/>:''}

                <ReactCssTransitionGroup
                    transitionName = "fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={1}
                    transitionAppear={true}
                    transitionAppearTimeout={100}
                    transitionEnter={true}
                    transitionLeave={false}
                >
                    <div key={this.props.router.location.pathname}>
                        {this.props.children}
                    </div>
                </ReactCssTransitionGroup>

                {showFootOne?<FootOne/>:''}
                {showFootTwo?<FootTwo/>:''}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        showLoading:state.showLoading,
        showNav:state.showNav,
        showFootOne:state.showFootOne,
        showFootTwo:state.showFootTwo
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        shownav:()=>{
            dispatch({
                type:'SHOW_NAV'
            })
        },
        hidenav:()=>{
            dispatch({
                type:'HIDE_NAV'
            })
        },
        showfootone:()=>{
            dispatch({
                type:'SHOW_FOOTONE'
            })
        },
        hidefootone:()=>{
            dispatch({
                type:'HIDE_FOOTONE'
            })
        },
        showfoottwo:()=>{
            dispatch({
                type:'SHOW_FOOTTWO'
            })
        },
        hidefoottwo:()=>{
            dispatch({
                type:'HIDE_FOOTTWO'
            })
        }
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)