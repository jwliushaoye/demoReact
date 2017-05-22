import React,{Component} from 'react'
import '../assets/css/goodslist.css'
import {Link} from 'react-router'
import {Time} from '../filters'

class GoodsList extends Component{
    render(){
        let arr=this.props.arr;
        //console.log(arr)
        return (
            <div className="baoliao_content">
                {
                    arr.map((val,index)=>{
                        return (
                            <div className="s_content" key={index}>
                                <Link to={{pathname:'baoliao_detail/'+val.id}}>
                                <div className="bl_img"><img src={val?val.src:''}/></div>
                                <div className="bl_right">
                                    <div className="bl_title">{val?val.title:''}</div>
                                    <div className="bl_note">{val?val.phone:''}</div>
                                    <div className="bl_tag">
                                        <div className="bl_price">{val?val.np:''}</div>
                                        <div className="bl_oprice">{val?val.op:''}</div>
                                        <div className="bl_time">{val?Time(val.time,0):''}</div>
                                        <div className="bl_mall">{val?val.mall:''}</div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default GoodsList