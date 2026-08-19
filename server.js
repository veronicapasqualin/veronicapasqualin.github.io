// Server minimo per servire il sito statico (HTML/CSS/immagini) su Hostinger Node.js hosting.
// Non modifica né genera contenuto: serve semplicemente i file già presenti nel repo,
// esattamente come farebbe un hosting PHP/HTML statico.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve tutti i file statici dalla root del progetto (index.html, style.css,
// knowledge-hub.html, 5-principi-geo-testati-sito-reale.html, profile.jpg,
// robots.txt, sitemap.xml, llms.txt, ecc.)
app.use(express.static(path.join(__dirname)));

// Fallback: qualsiasi rotta non trovata come file esatto prova a servire index.html
// (utile se in futuro aggiungi routing lato client; per un sito multi-pagina come
// il tuo, di norma ogni link punta già a un file .html esistente e questo blocco
// interviene solo su URL realmente inesistenti).
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Site running on port ${PORT}`);
});
