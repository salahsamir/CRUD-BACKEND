import categoryModel from "../../../../db/Models/Category_shema.js"


export const AddCategory=async(req,res,next)=>{
    try {
        const {name}=req.body
        if(categoryModel.findOne({name})){
            return res.json('category already exist')
        }
        const category=await categoryModel.create(req.body)
        return res.json(category)
        
    } catch (error) {
        return error.message
    }
}

export const GetAllCategory=async(req,res,next)=>{
    try {
        const category=await categoryModel.find()
        return res.json(category)
    } catch (error) {
        return error.message
    }
}