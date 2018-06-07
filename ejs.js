const ejs=require('ejs');
ejs.renderFile('./views/1.ejs',{names:'李四'},function (data,err) {
    if (err){
        console.log('编译失败');
    } else {
        console.log(data);
    }
});