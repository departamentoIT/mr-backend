import mongoose from 'mongoose';
const newsSchema = new mongoose.Schema({
    name:{
        type:String
    },
    desc:{
        type: String,
    },
    fecha:{
        type: String,
    },
    autor:{
        type: String,
    },
    media:{
        type: String,
    },
    type:{
        type: String
    },
    created: { 
        type: Date, 
        default: Date.now,
    }
}, { versionKey: false })

export const newsModel = mongoose.model('news', newsSchema)
