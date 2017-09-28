'use strict';

var s = 'Hello';
function greet(name){
    console.log(s+','+name+'!');
}

var v = 'wupenghui';
function showName(){
    console.log('HELLO, '+v);
}

let name = 'WUPENGHUI';

module.exports={
    greet:greet,
    showName:showName,
    name:name

};