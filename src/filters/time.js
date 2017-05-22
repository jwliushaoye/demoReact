import AddZero from './addzero'

const Time=(t,m1)=>{
    let d=new Date();
    d.setTime(t);
    if(m1==0){
        return `${AddZero(d.getMonth()+1)}-${AddZero(d.getDate())} `
    };
    if(m1==1){
        return `${d.getFullYear()}-${AddZero(d.getMonth()+1)}-${AddZero(d.getDate())}   ${AddZero(d.getHours())}:${AddZero(d.getMinutes())}:${AddZero(d.getSeconds())}`
    }
};


export default Time