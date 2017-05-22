import React,{Component} from 'react'

class Loading extends Component{
    render(){
        return (
        <div id="preloader">
            <div id="status">
                <p className="center-text"><span>拼命加载中···</span></p>
            </div>
        </div>
        )
    }
}

export default Loading