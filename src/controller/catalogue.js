
import {catalogueModel} from '../models/catalogue.js'

export async function cCatalogue(req, res) {
    const {name, price, desc, details, rating, type, idCompany} = req.body
    try {
        
        await catalogueModel.create({
            name,
            price,
            desc,
            details,
            rating,
            type,
            idCompany
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}


export async function rCatalogue(req, res) {
    try {
        const catalogue = await catalogueModel.find()
        res.json(catalogue);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export async function rCatalogueP(req, res) {
    try {
        const catalogue = await catalogueModel.find({type:"Producto"})
        res.json(catalogue);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export async function rCatalogueS(req, res) {
    try {
        const catalogue = await catalogueModel.find({type:"Servicio"})
        res.json(catalogue);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

export async function dCatalogues(req, res){
    try {
        const {_id} = req.params;
        const catalogue = await catalogueModel.findOneAndDelete({
            _id
        });
        res.json(catalogue);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export async function uCatalogues(id, body, res){
    catalogueModel.findByIdAndUpdate(
        id,
        {$set:{
            body
        }}, 
        (error, data) => res.send(data)
    )
}
