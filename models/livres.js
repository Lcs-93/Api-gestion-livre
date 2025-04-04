import mongoose from 'mongoose';

const livreSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
    annee: { type: Number, required: true, min: 1800 },
    disponible: { type: Boolean, default: true },
    genres: { type: [String], required: true },
    note: { type: Number, required: true, min: 0, max: 5 },
    stock: { type: Number, default: 0 }
});

const Livre = mongoose.model('Livre', livreSchema);

export default Livre;
