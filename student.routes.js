var express=require("express");
var router=express.Router();
var students=[]
router.get("/regstudent",function(req,res){
    res.sendFile(__dirname+"/register.html")
})
router.post("/sturegister",function(req,res){
    students.push(req.body)
    res.send("Student Registration Successful")
})
//res.send("STUDENT REGISTRATION SUCCESSFUL")
router.get("/register1",function(req,res){
    //console.log("Request Params Data ::",req.query);
    //students.push(req.query);
    // res.send(JSON.stringify(students));
    res.render("students",{
        allstudents:students
    })
    
})
module.exports=router;
