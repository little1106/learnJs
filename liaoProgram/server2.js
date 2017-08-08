'use strict';

var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

//从命令行获取当前目录
var root = path.resolve(process.argv[2]||'.');

console.log('Static root dir:'+root);

//创建服务器
var server = http.createServer(function(request, reponse){
    //获取url的path，类似‘/css/hootstrap.css’
    var pathName = url.parse(request.url).pathname;
    //获得对应的本地文件路径
    var filePath = path.join(root,pathName);
    //获取文件状态
    fs.stat(filePath, function(err,stats){
        if(!err&&stats.isFile()){
            //没有出错且文件存在
            console.log('200'+request.url);
            //发送200响应
            reponse.writeHead(200);
            //将文件流导向reponse
            fs.createReadStream(filePath).pipe(reponse);

        }else{
            //出错了或者文件不存在
            console.log('404'+request.url);
            //发送404
            reponse.writeHead(404);
            reponse.end('404 Not Found');
        }
    });
});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
