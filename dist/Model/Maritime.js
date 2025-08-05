"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cargaison_1 = require("./Cargaison");
const Materiel_1 = require("./Materiel");
const Chimique_1 = require("./Chimique");
const Alimentaire_1 = require("./Alimentaire");
const Fragile_1 = require("./Fragile");
class Maritime extends Cargaison_1.default {
    constructor(distance) {
        super(distance);
    }
    calculerFrais(produit) {
        if (produit instanceof Chimique_1.default) {
            const fraisBase = produit.poids * 1000 * this._distance;
            const fraisEntretien = produit.toxicite * 500;
            return fraisBase + fraisEntretien;
        }
        else if (produit instanceof Alimentaire_1.default) {
            // Frais alimentaire : 90F/kg/km + 5000F de chargement
            return (produit.poids * 90 * this._distance) + 5000;
        }
        else if (produit instanceof Materiel_1.default) {
            // Seuls les produits incassables sont acceptés (600F/kg/km)
            if (produit instanceof Fragile_1.default) {
                throw new Error("Les produits fragiles ne peuvent pas être transportés par voie maritime.");
            }
            return produit.poids * 600 * this._distance;
        }
        else {
            throw new Error("Type de produit non reconnu.");
        }
    }
    ajouterProduit(produit) {
        if (this._produit.length >= 10) {
            throw new Error("Impossible d'ajouter : la cargaison maritime est pleine.");
        }
        // Vérifier si c'est un produit fragile
        if (produit instanceof Fragile_1.default) {
            throw new Error("Les produits fragiles sont interdits en cargaison maritime.");
        }
        this._produit.push(produit);
        console.log(`Produit ${produit.libelle} ajouté. Montant actuel de la cargaison : ${this.sommeTotaleC()}F`);
    }
}
exports.default = Maritime;
//# sourceMappingURL=Maritime.js.map