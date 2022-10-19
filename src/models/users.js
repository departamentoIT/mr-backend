
import mongoose from 'mongoose';
const usersSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type     : String,
        unique   : true
    },
    password:{
        type     : String,
    },
    rol:{
        type    : String,
        default : "undefine",
    },
    created: { 
        type: Date, 
        default: Date.now,
    }
}, { versionKey: false })

export const userModel = mongoose.model('users', usersSchema)
