import mongoose from "mongoose";

const userSCHEMA = mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    admin_Role : {
        type : Number,
        require : true
    },

})

export const userMODEL = mongoose.model("userMODEL",userSCHEMA)

