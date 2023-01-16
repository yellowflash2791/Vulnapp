const express=require('express')
const app=express();
app.set('view engine', 'ejs');
app.disable("x-powered-by");
const PORT=8080
const userRoute=require('./routes/user')
app.use("/user",userRoute)
const testRoute=require('./routes/test')
app.use("/test",testRoute)


app.listen(PORT,()=>{
    console.log("Server is running")
})
