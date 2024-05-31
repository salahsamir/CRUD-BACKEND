import { Router } from "express";
import { AddCategory, GetAllCategory } from "./controller/category.js";


export const CategoryRouter=Router()

CategoryRouter.get('/',GetAllCategory)

CategoryRouter.post('/',AddCategory)