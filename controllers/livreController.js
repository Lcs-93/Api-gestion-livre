import Livre from '../models/livres.js';

// Récupérer tous les livres avec filtres et tri
export const getLivres = async (req, res) => {
    const { auteur, disponible, genre, minNote, tri, ordre } = req.query;
    let filter = {};
    let sort = {};

    if (auteur) filter.auteur = auteur;
    if (disponible) filter.disponible = disponible === 'true';
    if (genre) filter.genres = genre;
    if (minNote) filter.note = { $gte: parseFloat(minNote) };
    if (tri) sort[tri] = ordre === 'desc' ? -1 : 1;

    try {
        const livres = await Livre.find(filter).sort(sort);
        res.json(livres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer un livre par son identifiant
export const getLivreById = async (req, res) => {
    try {
        const livre = await Livre.findById(req.params.id);
        if (!livre) return res.status(404).json({ message: 'Livre non trouvé.' });
        res.json(livre);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Ajouter un nouveau livre
export const createLivre = async (req, res) => {
    const { titre, auteur, annee, disponible, genres, note, stock } = req.body;

    if (!titre || !auteur || !annee || !genres || note === undefined) {
        return res.status(400).json({ message: 'Champs requis manquants.' });
    }

    if (annee < 1800 || note < 0 || note > 5 || !Array.isArray(genres)) {
        return res.status(400).json({ message: 'Validation des données échouée.' });
    }

    const livre = new Livre({ titre, auteur, annee, disponible, genres, note, stock });

    try {
        const nouveauLivre = await livre.save();
        res.status(201).json(nouveauLivre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Modifier un livre
export const updateLivre = async (req, res) => {
    const { titre, auteur, annee, disponible, genres, note, stock } = req.body;

    try {
        const livre = await Livre.findByIdAndUpdate(
            req.params.id,
            { titre, auteur, annee, disponible, genres, note, stock },
            { new: true, runValidators: true }
        );
        if (!livre) return res.status(404).json({ message: 'Livre non trouvé.' });
        res.json(livre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un livre
export const deleteLivre = async (req, res) => {
    try {
        const livre = await Livre.findByIdAndDelete(req.params.id);
        if (!livre) return res.status(404).json({ message: 'Livre non trouvé.' });
        res.json({ message: 'Livre supprimé avec succès.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
