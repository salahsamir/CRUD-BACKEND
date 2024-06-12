import categoryModel from "../../../../db/Models/Category_shema.js"
import { AsyncHandeller } from "../../../Utils/ErrorHandling.js"


export const AddCategory=AsyncHandeller(
    async(req,res,next)=>{
  
        const {name}=req.body
        if(await categoryModel.findOne({name})){
            return next(new Error('category already exist',{cause:404}))
        }
        const category=await categoryModel.create(req.body)
        return res.status(200).json({message:'created successfully',created:true,category})
        
   
}
)

export const GetAllCategory=async(req,res,next)=>{
    try {
        const category=await categoryModel.find()
        return res.json(category)
    } catch (error) {
        return error.message
    }
}