import { Router } from "express";
import { AddProduct, GetAllProducts, UpdateProduct,DeleteProduct } from "./controller/product.js";

export const ProductRouter=Router()
ProductRouter.get('/',GetAllProducts)
ProductRouter.post('/',AddProduct)
ProductRouter.put('/:id',UpdateProduct)
ProductRouter.delete('/:id',DeleteProduct)

