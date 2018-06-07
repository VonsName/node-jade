const  jade=require('jade');
//从文件里面读取
let str=jade.renderFile('./views/1.jade',{pretty:true});
console.log(str);