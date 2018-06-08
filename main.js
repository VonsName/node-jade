const jade=require('jade');
const fs=require('fs');
const str=jade.renderFile('./views/index.jade',{pretty:true});
fs.writeFile('./build/index.html',str,function (err) {
   if (err){
       console.log('失败');
   }  else {
       console.log('成功');
   }
});
