import React,{Component} from 'react'
import '../assets/css/public.css'
import '../assets/css/baoliao.css'
import Search from './search'
import {Link} from 'react-router'
import GoodsList from './goodslist'
import {connect} from 'react-redux'


class BaoLiao extends Component{
    constructor(){
        super();
        this.state={
            showChoose:false,
            arr:[]
        };
        this.changeChoose=this.changeChoose.bind(this);
        this.close=this.close.bind(this);
        this.getData=this.getData.bind(this);
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        let {showloading,hideloading}=this.props;
        showloading();
        let url='http://localhost:27017/product';
        fetch(url).then((data)=>{
            if(data.ok){
                hideloading();
                data.json().then((data)=>{
                    //console.log(data);
                    this.setState({
                        arr:data
                    })
                })
            }
        })
    }
    changeChoose(){
        this.setState({
            showChoose:true
        })
    }
    close(){
        this.setState({
            showChoose:false
        })
    }
    render(){
        return (
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>优惠爆料</h2>
                        <div className="header_right shaixuan" onClick={this.changeChoose}><img src="/src/assets/images/iconfont-shaixuan.png"/></div>
                    </div>
                </header>

                <Search/>

                <div className="baoliao w">
                    <div className="ui-tab">
                        <ul className="ui-tab-nav">
                            <li className="current"><a href="javascript:;">最新爆料</a></li>
                            <li><a href="javascript:;">优质爆料</a></li>
                            <li><a href="javascript:;" >热门排行</a></li>
                            <li><a href="javascript:;" >白菜汇</a></li>
                        </ul>

                        <div className="ui-tab-content">

                            <Link to="baoliao_detail">

                                <GoodsList arr={this.state.arr}/>

                            </Link>

                        </div>

                        <div className="bl_more"><a href="javascript:;">加载更多</a></div>
                    </div>
                </div>

                <div className="shaixuan_box" style={this.state.showChoose?{display:'block'}:{display:'none'}}>
                    <div className="shaixuan_mall">
                        <h1>商城筛选</h1>
                        <div className="shaixun_item">
                            <a href="javascript:;" className="current">全部商城</a>
                            <a href="javascript:;">京东商城</a>
                            <a href="javascript:;">亚马逊</a>
                            <a href="javascript:;">苏宁易购</a>
                            <a href="javascript:;">一号店</a>
                            <a href="javascript:;">天猫商城</a>
                            <a href="javascript:;">易迅网</a>
                            <a href="javascript:;">健一网</a>
                            <a href="javascript:;">国美在线</a>
                            <a href="javascript:;">当当网</a>
                            <a href="javascript:;">亚马逊</a>
                            <a href="javascript:;">我买网</a>
                            <a href="javascript:;">优购商城</a>
                            <a href="javascript:;">新蛋</a>
                            <a href="javascript:;">顺丰优选</a>
                            <a href="javascript:;">京东wap端</a>
                            <a href="javascript:;">飞飞商城</a>
                            <a href="javascript:;">为为网</a>
                            <a href="javascript:;">淘宝网</a>
                            <a href="javascript:;">沱沱工社</a>
                            <a href="javascript:;">银泰网</a>
                            <a href="javascript:;">唯品会</a>
                            <a href="javascript:;">可得眼镜</a>
                            <a href="javascript:;">华强北商城</a>
                            <a href="javascript:;">天天网</a>
                            <a href="javascript:;">母婴之家</a>
                            <a href="javascript:;">聚美优品</a>
                            <a href="javascript:;">知我药妆</a>
                            <a href="javascript:;">1号药网</a>
                            <a href="javascript:;">酒仙网</a>
                            <a href="javascript:;">尚妆网</a>
                        </div>
                        <p><a className="shaixuan_colos" onClick={this.close}>关闭</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        showLoading:state.showLoading
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showloading:()=>{
            dispatch({
                type:'SHOW_LOADING'
            })
        },
        hideloading:()=>{
            dispatch({
                type:'HIDE_LOADING'
            })
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BaoLiao)