

import {userModel } from '../models/users.js'

export async function cUser(req, res) {
    const {name, email, password, rol} = req.body
    try {
        
        await userModel.create({
            name,
            email,
            password,
            rol
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
