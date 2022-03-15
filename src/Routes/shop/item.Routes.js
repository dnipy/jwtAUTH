import express from "express";
import {authenticateJWT} from "../../midllewares/auth.midlleware.js"
import {itemMODEL} from '../../models/shop.model.js'
import dotenv from 'dotenv'
dotenv.config()

const shopRoutes =express.Router()
const SECRET_KEY = process.env.SECRET_KEY


shopRoutes.get('/',authenticateJWT,async(req,res)=>{
    const shop = await itemMODEL.find({})
    res.send(shop)
})


export {
    shopRoutes
}