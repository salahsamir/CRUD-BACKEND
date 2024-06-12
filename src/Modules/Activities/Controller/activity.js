
import activityModel from "../../../../db/Models/Activity-schema.js"
import { AsyncHandeller } from "../../../Utils/ErrorHandling.js"


export const Addactivity=AsyncHandeller(
    async(req,res,next)=>{
  
        const {name}=req.body
        if(await activityModel.findOne({name})){
            return next(new Error('activity already exist',{cause:404}))
        }
        const activity=await activityModel.create(req.body)
        return res.status(200).json({message:'created successfully',created:true,activity})
        
   
}
)

export const GetAllactivity=async(req,res,next)=>{
    try {
        const activity=await activityModel.find()
        return res.json(activity)
    } catch (error) {
        return error.message
    }
}