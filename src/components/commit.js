import React,{Component} from 'react'

class Commit extends Component{
    render(){

        return (
            <div>
                <div className="pl_icon"></div>
                <div className="bl_pinlun w">
                    <form action="" method="get">
                        <input name="" type="text" placeholder="我来说一句" className="pinlun_input" ref="ipt"/>
                        <input name="" type="button" className="pinlun_submit" value="发表评论"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Commit