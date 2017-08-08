//导入koa
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
//注意require（‘koa-router’）返回的是函数
const router = require('koa-router')();


//创建一个koa对象表示web app本身
const app = new Koa();

//对于任何请求，app将调用该异步函数处理请求

//log request URL;
app.use(async(ctx,next)=>{
    console.log(`Process ${ctx.request.method}:${ctx.request.url}...`);
    await next();
});

//add url-router
router.get('/hello/:name',async(ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello,${name}!</h1>`;
})

router.get('/',async(ctx,next)=>{
    ctx.response.body = `<h1>Index</h1>
                        <form action="/signin" method="post">
                        <p>Name: <input name="name" value="koa"></input></p>
                        <p>Password: <input name="password" type="password"></p>
                        <p><input type="submit" value="Submit"></p>
                        </form>`;
});

router.post('/signin',async(ctx,next)=>{
    var name = ctx.request.body.name||'',
        password = ctx.request.body.password||'';
        console.log(`signin with name:${name},password:${password}`);
        if (name==='koa' && password==='12345') {
            ctx.response.body = `<h1>Welcome,${name}!</h1>`;
        } else {
            ctx.response.body = `<h1>Login failed!</h1>
                                    <p><a href="/">Try again</a></p>`
        }
});

app.use(bodyParser());
//add router middleware;
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');