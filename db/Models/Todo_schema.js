import { Schema, model } from "mongoose";


let shema=new Schema({
    
    name:{
        type:String,
        required:true,
       
    },
    image:String,
    category:{
        type:Schema.Types.ObjectId,
        ref:'category'
    },
    activity:{
        type:Schema.Types.ObjectId,
        ref:'activity'
    },
    description:String,
    date:Date,
    user:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    operation:{
        type:String,
        enum:['To Do','in Progress','Done'],
        required:true
    }
})

let todoModel=model.todo||model('todo',shema)
export default todoModel