import mongoose from 'mongoose';
const catalogueSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type: String,
    },
    desc:{
        type: String,
    },
    details:{
        type: String,
    },
    rating:{
        type: String,
        default: "4"
    },
    type:{
        type: String
    },
    idCompany:{
        type: String
    },
    created: { 
        type: Date, 
        default: Date.now,
    }
}, { versionKey: false })

export const catalogueModel = mongoose.model('catalogues', catalogueSchema)
