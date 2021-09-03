var express=require("express");
var app=express();
//var students=[];
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine', 'pug');
app.set('views','./views');
var studentRoutes=require("./student.routes")
app.use("/student",studentRoutes)
app.get("/",function(req,res){
    res.sendFile(__dirname+"/registration.html");
})
app.listen(7080,function(){console.log("Listening on 7080")})