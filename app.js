const express=require("express")
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js")

const app=express()

var items=['Buyfood','Cookfood','eatfood'];
var workitems=[];
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("public"))
app.get("/",function(req,res){

var day=date()

    res.render("list",{listTitle:day,newlistitems:items})

})
app.post("/",function(req,res){
    var item=req.body.newitem
if(req.body.list=="workList"){
workitems.push(item);
res.redirect("/work")
}else{
    items.push(item)
    res.redirect("/")
}

})
app.post("/delete",function(req,res){
    items.pop()
    res.redirect("/")

})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"workList",newlistitems:workitems})
})

app.listen(3000,function(){
    console.log("Server is listening at 3000")
})
