import React,{Component} from 'react'
import '../assets/css/silder.css'


class Slider extends Component{
    componentDidMount(){
        let mySwipe=new Swipe($('.banner')[0],{
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
        })
    }
    render(){
        return (
            <div className="banner">
                <ul className="clearfix">
                    <li>
                        <img src="/src/assets/images/lunbo1.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="/src/assets/images/lunbo2.png" alt=""/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Slider
