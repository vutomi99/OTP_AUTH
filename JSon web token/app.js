require("dotenv").config();
const express = require("express");
const app = express();

//Listining endpoint 
// app.get("/api",(req,res)=>{
//     res.json({
//         success:1,
//         message:"this api is working"
//     });


    
// })

const userRouter = require("./api/users/user.router");

app.use(express.json()); 
app.use("/api/users", userRouter);

//Listining port
const port = process.env.PORT || 4000;
app.listen( port,()=>{
    console.log("Server up and running ", port);
});