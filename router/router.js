var db=require('./../fengzhuang2.js');
var express = require('express');
var router = express.Router();

// 插入数据
router.post('/api/addStudents',function(req,res){
    //前端的post一共有两种传参方式，
    //一种是body传参，后端通过req.body去拿参数
    //另一种是options传参，后端通过req.query去拿参数
    res.setHeader('Access-Control-Allow-Origin', '*'); //设置接口跨域，提供给第三者使用
    //get使用req.query去拿前端传参，post使用req.body
    console.log(req.url,'前端post方法传进来的参数为===：',req.query)
    // return;
    let data = req.query; //{name:'你大爷',age:18}

    db.insertOne('student',data,function(err,result){
        if (err) {
            console.log(err)
        };
        res.send(result.ops);
      
    })

});

// 查找数据
router.get("/queryStudents",function(req,res){

    //查找4个参数，在哪个集合查，查什么，查完之后做什么
    db.find('student',data,function(err,result){
        if(err){
            console.log(err);
        }
        res.send(result);
        console.log(result.length);
    });
});

//删除
router.get("/delStudents",function(req,res){
    
    db.deleteMany("student",data,function(err,result){
       if(err){
           console.log(err);
       }
        res.send(result);
    });
});

//修改
router.get("/modifyStudents",function(req,res){
    
    db.updateMany(
        "student",      //集合名字

        {
            name:"你大爷"       //要改哪里
        },

        {
            $set:{ sex: "你大爷666" }     //怎么改
        },

        function(err,result){   //改完之后做什么
            if(err){
                console.log(err);
            }
            res.send(result);
        }
    );
});

module.exports = router;