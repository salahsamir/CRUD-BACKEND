import { Router } from "express";
import { Addactivity, GetAllactivity } from "./controller/activity.js";


export const ActivitiesRouter=Router()

ActivitiesRouter.get('/',GetAllactivity)

ActivitiesRouter.post('/',Addactivity)