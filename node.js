//项目环境
const express=require('express');
const bodyParser=require('body-parser');
const cookiSession=require('cookie-session');
const cookieParser=require('cookie-parser');
const mongodb = require('mongodb');
const mongoCt = mongodb.MongoClient;


//1.创建express服务
const server = express();
server.listen(27017);

//3. post请求设置
server.use(bodyParser.urlencoded({   //字符
    limit:1024*2,
    extended:true//一般模式
}));


//3.5 cookie位置
server.use(cookieParser());

//4.session配置
let arr=[];
for(let i=0;i<100000;i++){
    arr.push('alex_key'+Math.random());
}
server.use(cookiSession({
    name:'baidu_id',
    keys:arr,
    maxAge:1000*10
}));


/* GET home page. */
const address = `mongodb://127.0.0.1:27017/project`;


server.use('/user',(req,res)=>{
    mongoCt.connect(address,(err,db)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        if(err) {
            console.log('DB链接错误')
        }else {
            let user = db.collection('user');
            user.find().toArray((err,result)=>{
                if(err) throw err;
                console.log(result.length);
                switch (req.query.act) {
                    case 'login':
                        result.map((val,index)=>{
                            if(val.username==req.query.username){
                                if(val.password==req.query.password){
                                    res.send('{"error":"0","msg":"登陆成功"}');
                                    return false
                                }else {
                                    res.send('{"error":"1","msg":"用户名或密码错误"}');
                                    return false
                                }
                            }else if(index>=result.length-1){
                                res.send('{"error":"1","msg":"该用户名不存在"}')
                            }
                        });
                        break;
                    case 'reg':
                        for (let i=0,len=result.length;i<len;i++){
                            let val=result[i];
                            if(val.username){
                                res.send('{"error":"1","msg":"该用户已经存在"}')
                            }else {
                                user[req.query.username]=req.query.password;
                                res.send('{"error":"0","msg":"注册成功"}')
                            }
                        }
                        break;
                }
            });
        }
    });
});

server.get('/product',(req,res)=>{
    mongoCt.connect(address,(err,db)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        if(err) {
            console.log('DB链接错误')
        }else {
            let product = db.collection('product');
            product.find().toArray((err,result)=>{
                if(err) throw err;
                res.send(result);
            });
        }
    });

});

server.get('/hotsearch',(req,res)=>{
    mongoCt.connect(address,(err,db)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        if(err) {
            console.log('DB链接错误')
        }else {
            let hotsearch = db.collection('hotsearch');
            hotsearch.find().toArray((err,result)=>{
                if(err) throw err;
                console.log(result);
                res.send(result);
            });
        }
    });

});

server.get('/newsindex',(req,res)=>{
    mongoCt.connect(address,(err,db)=>{
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        if(err) {
            console.log('DB链接错误')
        }else {
            let newsindex = db.collection('newsdata');
            newsindex.find().toArray((err,result)=>{
                if(err) throw err;
                console.log(result);
                res.send(result);
            });
        }
    });

});

