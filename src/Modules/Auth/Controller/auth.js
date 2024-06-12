import userModel from "../../../../db/Models/User_schema.js";
import { AsyncHandeller } from "../../../Utils/ErrorHandling.js";
import { GenerateToken } from "../../../Utils/Token.js";
export const registar=AsyncHandeller(async(req,res,next)=>{
    let {email}=req.body;
    console.log(email);
    if(await userModel.findOne({email})){
        return next(new Error('user already exist',{cause:404}))
    }
    const user=await userModel.create(req.body)
    return res.status(200).json({message:'created successfully',created:true,user})
})
export const login=async(req,res,next)=>{
    try {
        let {email,password}=req.body;

        if(!await userModel.findOne({email,password})){
            return next(new Error('invalid cardational information',{cause:"404"}))
        }
     const token=GenerateToken({email,password})
        
        return res.json({token})
    } catch (error) {
        return res.json({error: error.message})
    }


}
