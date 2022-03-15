import mongoose from "mongoose";
import express from "express";
import {userMODEL} from '../../models/user.model.js'
import { userVALID } from "../../midllewares/users.midlleware.js";


const userRoutes = express.Router();

userRoutes.get('/',async(req,res)=>{
    const ALL_USERS = await userMODEL.find({})
    res.send(ALL_USERS)
})

userRoutes.post('/create',userVALID,async(req,res)=>{
    const {username , password , admin_Role} = req.body
    
    const newUSER = await userMODEL({
        username,
        password,
        admin_Role
    })
    newUSER.save()
        .then( ()=>res.send('ok'))
        .catch((e)=>res.send(e.message))
    
})


export {userRoutes}

