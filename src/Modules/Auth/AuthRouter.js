import { Router } from "express";
import { registar,login } from "./Controller/auth.js";

export const AuthRouter=Router()

AuthRouter.post('/registar',registar)
AuthRouter.post('/login',login)