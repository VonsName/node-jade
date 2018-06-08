const ejs=require('ejs');
let str=ejs.renderFile('./views/1.ejs',{pretty:true});
console.log(str);