import mongoose from "mongoose";

const itemSCHEMA = mongoose.Schema({
    itemName : {
        type : String,
        require : true,
        unique : true
    },
    itemDesc : {
        type : String,
        require : true
    },
    itemLike : {
        type : Number,
        require : true
    },
    itemImg : String,
})

export const itemMODEL = mongoose.model("itemMODEL",itemSCHEMA)

