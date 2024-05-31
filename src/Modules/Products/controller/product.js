import categoryModel from "../../../../db/Models/Category_shema.js"
import productModel from "../../../../db/Models/Products_schema.js"




export const AddProduct=async(req,res,next)=>{
    try {
        const {name,price,category}=req.body
        if(await productModel.findOne({name})){
            return res.json('product already exist')
        }
         if(! await categoryModel.findById(category)){
            return res.json('category not found')
         }
        const product=await productModel.create(req.body)
        return res.json({message:'success,product created',product})
    }
    catch (error) {
        return error.message
    }

}

export const GetAllProducts=async(req,res,next)=>{
    try {
        const product=await productModel.find().populate('category')
        return res.json({message:'success',product})
    } catch (error) {
        return error.message
    }
}

export const UpdateProduct=async(req,res,next)=>{
    try {
       const {id}=req.params
       const {name,price,category}=req.body
       const product=await productModel.findByIdAndUpdate(id,req.body,{new:true})
       return res.json({message:'success,product updated',product})
    } catch (error) {
        return error.message
    }
}