

import {userModel } from '../models/users.js'
import {catalogueModel} from '../models/catalogue.js'
export async function cUser(req, res) {
    const {name, email, password, rol, number, services} = req.body
    try {
        
        await userModel.create({
            name,
            email,
            password,
            rol,
            number,
            services
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export async function rUsers(req, res) {
    try {
        const users = await userModel.find()
        res.json(users);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export async function dUsers(id, res){
    userModel.findByIdAndDelete(
        id,
        (error, data) => res.send(data)
    )
}

export async function uUsers(id, body, res){
    userModel.findByIdAndUpdate(
        id,
        {$set:{
            body
        }}, 
        (error, data) => res.send(data)
    )
}
export async function oneUsers(req, res){
    try {
        const {_id} = req.params;
        const user = await userModel.findOne({
            _id
        });
        res.json(user);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
//get cata
export async function rUserCatalogue(req, res) {
    try {
        const {idCompany} = req.params;
        const catalogue = await catalogueModel.find({
            idCompany
        });
        res.json(catalogue);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
