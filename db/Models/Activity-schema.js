import { Schema, model } from "mongoose";


let shema=new Schema({
    
    name:{
        type:String,
        required:true,
       
    }
})

let activityModel=model.activity||model('activity',shema)
export default activityModel