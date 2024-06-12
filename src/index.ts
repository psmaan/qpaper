import express, { urlencoded,Request,Response} from 'express'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import 'dotenv/config'
import mongoose from 'mongoose'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
mongoose.connect("mongodb://localhost:27017/Course").then(()=>{
    console.log("Connect to MongoDb")

}).catch((e)=>{
    console.log(e)

})
const app=express()
app.use(cookieparser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
  }))
app.get("/",(req:Request,res:Response)=>{
    res.send("Server is Started")

})

const Port=4000
app.listen(Port,()=>{
    console.log(`SERVER IS RUNNNING AT ${Port}`)
})