import { Types, model } from "mongoose";
import { Schema } from "mongoose";


let schema=new Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

let userModel=model.user||model('user',schema)
export default userModel