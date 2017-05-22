import React,{Component} from 'react'

class TaoBaoReturn extends Component{
    render(){
        return(
            <div>
                <header>
                    <div className="header"> <a className="new-a-back" onClick={this.props.router.goBack}> <span><img src="/src/assets/images/iconfont-fanhui.png"/></span> </a>
                        <h2>淘宝返利</h2>
                    </div>
                </header>
             
                <div className="tao_search w">
                    <form action="" method="get" className="taobao_form">
                        <input name="" type="text" className="search_taobao" placeholder="输入任意淘宝/天猫宝贝标题开始购物拿返利！"/><input name="" type="button" className="taobao_submit" value=""/>
                    </form>
                </div>
                <div className="taobao_liucheng"><img src="/src/assets/images/taobao_liucheng.png"/></div>
            </div>
        )
    }
}

export default TaoBaoReturn