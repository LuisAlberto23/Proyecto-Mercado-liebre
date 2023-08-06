const express=require("express")
const app=express()
const path=require("path")

const publicPath= path.resolve(__dirname,"./public")
app.use(express.static(publicPath))

app.listen(4000,()=>{
    console.log("hola mundo!")
 })

 app.get("/", function(req,res){
    let htmlPath=path.resolve(__dirname,"./views/home.html")
    res.sendFile(htmlPath)

})

app.get("/registro", function(req,res){
    let htmlPath=path.resolve(__dirname,"./views/register.html")
    res.sendFile(htmlPath)

})
app.get("/login", function(req,res){
    let htmlPath=path.resolve(__dirname,"./views/login.html")
    res.sendFile(htmlPath)

})




