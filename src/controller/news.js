
import {newsModel} from '../models/news.js'

export async function cNews(req, res) {
    const {name, desc, fecha, autor, media, type} = req.body
    try {
        
        await newsModel.create({
            name,
            desc,
            fecha,
            autor,
            media,
            type
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export async function rNews(req, res) {
    try {
        const news = await newsModel.find()
        res.json(news);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
