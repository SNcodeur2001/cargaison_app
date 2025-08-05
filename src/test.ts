import Aerienne from "./Model/Aerienne";
import Maritime from "./Model/Maritime";
import Routiere from "./Model/Routiere";
import Alimentaire from "./Model/Alimentaire";
import Chimique from "./Model/Chimique";
import Fragile from "./Model/Fragile";
import Incassable from "./Model/Incassable";

console.log("=== TEST DE L'APPLICATION DE GESTION DE CARGAISONS ===\n");

// Création des produits
const pommes = new Alimentaire("Pommes", 50);
const riz = new Alimentaire("Riz", 100);
const acide = new Chimique("Acide sulfurique", 25, 8);
const engrais = new Chimique("Engrais chimique", 75, 3);
const ordinateur = new Fragile("Ordinateur", 5);
const moteur = new Incassable("Moteur", 200);

console.log("=== INFORMATIONS DES PRODUITS ===");
pommes.info();
riz.info();
acide.info();
engrais.info();
ordinateur.info();
moteur.info();

console.log("\n=== CRÉATION DES CARGAISONS ===");

// Cargaison Aérienne (distance : 1000km)
const cargaisonAerienne = new Aerienne(1000);
console.log("\n--- Cargaison Aérienne ---");
try {
    cargaisonAerienne.ajouterProduit(pommes);
    cargaisonAerienne.ajouterProduit(ordinateur);
    cargaisonAerienne.ajouterProduit(moteur);
} catch (error) {
    console.log("Erreur:", error instanceof Error ? error.message : String(error));
}

// Test d'ajout d'un produit chimique (interdit)
try {
    cargaisonAerienne.ajouterProduit(acide);
} catch (error) {
    console.log("Erreur:", error instanceof Error ? error.message : String(error));
}

// Cargaison Maritime (distance : 5000km)
const cargaisonMaritime = new Maritime(5000);
console.log("\n--- Cargaison Maritime ---");
try {
    cargaisonMaritime.ajouterProduit(riz);
    cargaisonMaritime.ajouterProduit(acide);
    cargaisonMaritime.ajouterProduit(moteur);
} catch (error) {
    console.log("Erreur:", error instanceof Error ? error.message : String(error));
}

// Test d'ajout d'un produit fragile (interdit)
try {
    cargaisonMaritime.ajouterProduit(ordinateur);
} catch (error) {
    console.log("Erreur:", error instanceof Error ? error.message : String(error));
}

// Cargaison Routière (distance : 500km)
const cargaisonRoutiere = new Routiere(500);
console.log("\n--- Cargaison Routière ---");
try {
    cargaisonRoutiere.ajouterProduit(pommes);
    cargaisonRoutiere.ajouterProduit(ordinateur);
    cargaisonRoutiere.ajouterProduit(moteur);
} catch (error) {
    console.log("Erreur:", error instanceof Error ? error.message : String(error));
}

// Test d'ajout d'un produit chimique (interdit)
try {
    cargaisonRoutiere.ajouterProduit(engrais);
} catch (error) {
    console.log("Erreur:", error instanceof Error ? error.message : String(error));
}

console.log("\n=== RÉSUMÉ DES CARGAISONS ===");
console.log(`Cargaison Aérienne - Nombre de produits: ${cargaisonAerienne.nbProduit1()}, Montant total: ${cargaisonAerienne.sommeTotaleC()}F`);
console.log(`Cargaison Maritime - Nombre de produits: ${cargaisonMaritime.nbProduit1()}, Montant total: ${cargaisonMaritime.sommeTotaleC()}F`);
console.log(`Cargaison Routière - Nombre de produits: ${cargaisonRoutiere.nbProduit1()}, Montant total: ${cargaisonRoutiere.sommeTotaleC()}F`);

// Test de capacité maximale
console.log("\n=== TEST DE CAPACITÉ MAXIMALE ===");
const cargaisonTest = new Routiere(100);
try {
    for (let i = 0; i < 12; i++) {
        const produit = new Alimentaire(`Produit ${i+1}`, 10);
        cargaisonTest.ajouterProduit(produit);
        console.log(`Produit ${i+1} ajouté (${cargaisonTest.nbProduit1()}/10)`);
    }
} catch (error) {
    console.log("Erreur:", error instanceof Error ? error.message : String(error));
}