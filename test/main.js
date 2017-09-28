'use strict';
/* 模块调用实验
var hello = require('./hello');
var s = 'xiaoming';

hello.greet(s);
hello.showName();
console.log(hello.name);
hello.greet(hello.name);
*/
/*
//异步读取文件实验
var fs = require('fs');

fs.readFile('sample.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//异步读取二进制文件实验
fs.readFile('beautifulgirl.png',function(err,data){
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        //console.log(data.toString('utf-8'))
        console.log(data.length+'bytes');
    }
})

var dataWrite = '江南大学我最帅！！！！！！';
fs.open('sample.txt','a',function(err,fd){
    if (err) {
        console.log(err);
    } else {
        console.log('openFile');
        fs.writeFile(fd,dataWrite,function(err){
            if (err) {
                console.log(err);
            } else {
                console.log('ok!');
            }
        });        
    }    
})*/

var fs = require('fs');
var rs = fs.createReadStream('sample.txt','utf-8');
rs.on('data', function(chunk) {
    console.log('DATA: ');
    console.log(chunk);
});

rs.on('end', function(){
    console.log('END')
});

rs.on('error', function(err){
    console.log('ERROR: '+err);
});
/*
var wr1 = fs.createWriteStream('sample.txt','utf-8');
wr1.write('stream 写入   啦啦啦啦\n');
wr1.write(new Buffer('二进制数据.....\n','utf-8'));
wr1.write(new Buffer('END','utf-8'));
wr1.write('END');
wr1.end();*/
var wr2 = fs.createWriteStream('sample2.txt','utf-8');
rs.pipe(wr2);
