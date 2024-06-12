import mongoose from "mongoose";
import bcrypt from 'bcrypt'
export type UserType={
    _id:string,
    firstname:string,
    lastname:string,
    password:string
    email:string,
    phone:number
}
const UserSchema=new mongoose.Schema<UserType>({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})
//middleware for password hashing
UserSchema.pre("save" , async function (next){
    if(this.isModified('password')) {
        this.password=await bcrypt.hash(this.password,8);
    }
    next()

})
const Usermodel=mongoose.model("User",UserSchema)
export default Usermodel