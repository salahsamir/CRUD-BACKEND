import { Schema, model } from "mongoose";


let shema=new Schema({
    
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:String
})

let categoryModel=model.category||model('category',shema)
export default categoryModel