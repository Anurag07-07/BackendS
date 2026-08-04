import express, {  type Request, type Response } from 'express'
const app = express()

const PORT:number = 3000

app.get('/',(req:Request,res:Response)=>{
  res.send("<h1>Welcome Home</h1>")
})

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:/${PORT}`);
})