# API Gestion de Livres (Node.js + MongoDB)

## 📌 Description
Cette API permet de gérer une collection de livres en utilisant **Node.js**, **Express**, et **MongoDB**. Elle propose des fonctionnalités CRUD (Create, Read, Update, Delete) avec des filtres, du tri, et une validation des données.

---

## 🚀 Installation

### 1. Cloner le dépôt
```bash
 git clone <URL_DU_DEPOT>
```

### 2. Installer les dépendances
```bash
 npm install
```

### 3. Créer un fichier `.env`
Crée un fichier `.env` à la racine du projet avec le contenu suivant :
```
MONGODB_URL=mongodb://127.0.0.1:27017/bibliotheque
PORT=3000
```

### 4. Lancer MongoDB
```bash
 mongod
```

### 5. Lancer le serveur Node.js
```bash
 npm run dev
```

Le serveur tourne par défaut sur `http://localhost:3000`

---

## 📂 Structure du Projet
```
api-gestion-livre/
├── models/
│   └── Livre.js
├── controllers/
│   └── livreController.js
├── routes/
│   └── livres.js
├── index.js
├── package.json
├── .env
├── .gitignore
├── README.md
```

---

## 📚 Endpoints disponibles

### 🔍 GET /livres
Récupère tous les livres avec filtres et tri.
- **Filtres disponibles** : `auteur`, `disponible`, `genre`, `minNote`
- **Tri** : `tri=note` ou `tri=annee`
- **Ordre** : `ordre=asc` ou `ordre=desc`

Exemple :
```
GET /livres?genre=Fantasy&minNote=4&tri=note&ordre=desc
```

### 📖 GET /livres/:id
Récupère un livre par son identifiant.

### ➕ POST /livres
Ajoute un nouveau livre.
- Requête (JSON) :
```json
{
  "titre": "1984",
  "auteur": "George Orwell",
  "annee": 1949,
  "disponible": true,
  "genres": ["Dystopie", "Science-fiction"],
  "note": 4.6,
  "stock": 8
}
```

### 🔄 PUT /livres/:id
Modifie un livre par son identifiant.

### ❌ DELETE /livres/:id
Supprime un livre par son identifiant.

---

## ✅ Tests Automatisés

Les tests peuvent être effectués via **Postman**. 
Pour automatiser, ajouter les tests dans l'onglet `Tests` de chaque requête et utiliser **Collection Runner**.

---

## 📌 Auteur
Projet réalisé par lcs-93

