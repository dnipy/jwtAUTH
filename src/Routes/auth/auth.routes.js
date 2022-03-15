import express from "express";
import {userMODEL} from '../../models/user.model.js'
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const authRoutes =express.Router()
const SECRET_KEY = process.env.SECRET_KEY


authRoutes.post('/login',async(req,res)=>{
    const { username, password } = req.body;

    const user =await userMODEL.findOne({username,password}).catch((e)=>res.send(e.message))
    console.log(user,SECRET_KEY);

    if (user) {
        const accessToken = jsonwebtoken.sign({ username: user.username,  role: user.admin_Role }, SECRET_KEY);
        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }

})


export {
    authRoutes
}