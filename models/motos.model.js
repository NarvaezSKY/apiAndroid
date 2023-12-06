import mongoose, { Schema } from "mongoose";

const motos=new Schema({
    placaMoto:{type:String},
    marcaMoto:{type:String},
    modeloMoto:{type:String}
},{
    timestamps:true
})

export default mongoose.model('Motos', motos)