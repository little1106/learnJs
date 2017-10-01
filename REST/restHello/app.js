const Koa = require('koa');
const app = new Koa();
const controller = require('./controller');
const bodyParser = require('koa-bodyParser');

app.use(bodyParser());
app.use(controller());

app.listen(3000);

console.log('app started at port 3000');