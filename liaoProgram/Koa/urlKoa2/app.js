//导入koa
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');


//创建一个koa对象表示web app本身
const app = new Koa();


//log request URL;
app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method}:${ctx.request.url}...`);
    await next();
});

const controller = require('./controller');

app.use(bodyParser());
//add router middleware;
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');



