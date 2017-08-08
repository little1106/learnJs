const nunjucks = require('nunjucks');

function createEnv(path, opts){
    var autoescape = opts.autoescape===undefined ? true:opts.autoescape,
        noCache = opts.noCache||false,
        watch = opts.watch||false,
        throwOnUndefined = opts.throwOnUndefined||false,
        path = path||'views',
        env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path,{
            noCache:noCache,
            watch:watch
        }),{
            autoescape:autoescape,
            throwOnUndefined:throwOnUndefined
        });
    if (opts.filters) {
        for(var f in opts.filters){
            env.addFilter(f,opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views',{
    watch:true,
    filters:{
        hex:function(n){
            return 'Ox'+n.toString(16);
        }
    }
});

var s = env.render('hello.html',{name:'<script>alert("小明")</scipt>'});
console.log(s);