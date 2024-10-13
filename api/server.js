/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3003;

const pool = mysql.createPool({
  user: "rootnws",
  host: "localhost",
  database: "portfolio",
  password: "root",
  port: 3306,
});

app.post("/contact", async (req, res) => {
  const { nom, prenom, telephone, objet, email, message } = req.body;

  if (!nom || !prenom || !telephone || !objet || !email || !message) {
    return res.status(400).json({message: "Vous devez renseigner tous les champs"});
  } else if (telephone.length !== 10) {
    return res
      .status(400)
      .json({message: "Le numéro de téléphone doit contenir 10 chiffres"});
  } else if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).json({message: "L'adresse email n'est pas valide"});
  } else if (message.length < 10) {
    return res
      .status(400)
      .json({message: "Le message doit contenir au moins 10 caractères"});
  } else if (objet.length < 3) {
    return res.status(400).json({message: "L'objet doit contenir au moins 3 caractères"});
  } else if (nom.length < 3) {
    return res.status(400).json({message: "Le nom doit contenir au moins 3 caractères"});
  } else if (prenom.length < 3) {
    return res
      .status(400)
      .json({message: "Le prénom doit contenir au moins 3 caractères"});
  }

  try {
    await pool.query(
      "INSERT INTO contact (nom, prenom, telephone, objet, email, message) VALUES (?, ?, ?, ?, ?, ?)",
      [nom, prenom, telephone, objet, email, message]
    );
    res.status(201).json({message: "Votre message a bien été envoyé"});
  } catch (e) {
    res.status(500).send("Une erreur est survenue", e);
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});