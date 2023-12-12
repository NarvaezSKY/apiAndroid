import Motos from '../models/motos.model.js'

export const getAllMotos=async(req,res)=>{
    try {
        const foundMotos=await Motos.find()
        res.status(200).json({foundMotos})
    } catch (error) {
        res.send(error)
    }
}

export const postMotos=async(req, res)=>{
    try {
        const {placaMoto, marcaMoto, modeloMoto}= req.body

        const newMoto= new Motos({
            placaMoto,
            marcaMoto,
            modeloMoto
        })
        const savedMoto=await newMoto.save()
    
        res.status(200).json({message:"moto guardada cabron", savedMoto})
    } catch (error) {
        res.status(400).json({message:`SERVER ERROR! ${error}`})
    }
    
}

