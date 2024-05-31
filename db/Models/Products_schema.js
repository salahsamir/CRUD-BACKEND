import { Types, model } from "mongoose";
import { Schema } from "mongoose";


let schema=new Schema({
    name:{
        type:String,
        required:true

    },
    desc:{
        type:String

    },
    image:String,
    price:Number,
    category:{
        type:Types.ObjectId,
        ref:'category',
    },
    quantity:Number,
    color:[String],
    size:[String],
    rating:Number
})

let productModel=model.product||model('product',schema)
export default productModel