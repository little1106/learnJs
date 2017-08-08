//导入koa
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const isProduction = process.env.NODE_ENV==='production';
const templating = require('./templating');
const controller = require('./controller');

//创建一个koa对象表示web app本身
const app = new Koa();


//log request URL;
app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method}:${ctx.request.url}...`);
    var start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime()-start;
    ctx.response.set('X-Response-Time',`${execTime}ms`);
});

//静态文件处理
if(!isProduction){
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/',__dirname+'/static/'));
}

//解析POST请求
app.use(bodyParser());

//为ctx对象添加render()方法
app.use(templating('views',{
    noCache:!isProduction,
    watch:!isProduction
}));

//处理url
app.use(controller());



app.listen(3000);
console.log('app started at port 3000...');



