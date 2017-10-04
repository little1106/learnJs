//导入koa
const Koa = require('koa');

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
let staticFiles = require('./static-files');
app.use(staticFiles('/static/',__dirname+'/static/'));





app.listen(3000);
console.log('app started at port 3000...');



