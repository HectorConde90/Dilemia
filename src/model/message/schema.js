import mongoose from 'mongoose';


const messageSchema = mongoose.Schema({

    asunto: String,
    mes: String,
    nombre: String,
    email: String,
    asunto: String,
    mensaje: String,
    fecha: Date
})

export default messageSchema;