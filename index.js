import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './src/Routes/users/users.Routes.js';
import { authRoutes } from './src/Routes/auth/auth.routes.js';
import { shopRoutes } from './src/Routes/shop/item.Routes.js';

const app = express()


//      midllewares     //
app.use(express.json())
app.use('/users',userRoutes)
app.use('/auth',authRoutes)
app.use('/shop',shopRoutes)




//      dotENV      //
dotenv.config()
const PORT = process.env.PORT 
const DATA_BASE_URL = process.env.DATA_BASE_URL
const BREAK_LINE = process.env.BREAK_LINE



//      IndexRoute      //
app.get('/',(req,res)=>{
    res.send('index')
})



//      EnteryPoint     //
app.listen(PORT,()=>{
    console.log(`server is up on port : ${PORT}`)
    mongoose.connect(DATA_BASE_URL,(err)=>{
        if(err){
            console.log(err.message);
        }
        else {
            console.log('dataBase is ready');
        }
        console.log(BREAK_LINE);
    })
})