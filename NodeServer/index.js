// const http = require("http")


// const  PORT = 3000 //We Defined a variable to store the value of the port

// const server = http.createServer(
//   async(req,res)=>{
//     console.log("Request Recieved");

//     if (req.method=='GET') {
//       console.log("Get Method");
//     }else if (req.method=='POST') {
//       res.writeHead(201)
//       console.log("POST Method");
//     }else{
//       console.log("Hello World");
//     }

//     res.end("Hello World")
//   }
// ) // Create a server instance , but it is not working
// server.listen(PORT,()=>{
//   console.log(`Server Runnning on PORT ${PORT}`);
// })
const express = require('express')
const app = express();

const PORT = 3000

app.get('/home',(req,res)=>{
  res.status(200).json({
    message:`Welcome Home`
  })
})

app.listen(PORT,()=>{
  console.log(`Server Started at PORT ${PORT}`);
})