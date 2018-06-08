const  jade=require('jade');
//从文件里面读取
let str=jade.renderFile('./views/2.jade',{pretty:true,name:'blue'});
console.log(str);