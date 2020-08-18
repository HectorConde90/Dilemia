import mongoose from 'mongoose';


const concertSchema = mongoose.Schema({

    dia: Number,
    mes: String,
    anyo: Number,
    ubicacion: String,
    direccion: String,
    ciudad: String
})

export default concertSchema;