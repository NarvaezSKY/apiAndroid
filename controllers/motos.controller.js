import Motos from '../models/motos.model.js'

export const getAllMotos=async(req,res)=>{
    try {
        const foundMotos=Motos.find()
        res.send(foundMotos)
    } catch (error) {
        res.send(error)
    }
}

export const postMotoso=async(req, res)=>{
    
}