"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alimentaire_1 = require("./Alimentaire");
const Cargaison_1 = require("./Cargaison");
const Chimique_1 = require("./Chimique");
const Materiel_1 = require("./Materiel");
class Routiere extends Cargaison_1.default {
    constructor(distance) {
        super(distance);
    }
    calculerFrais(produit) {
        if (produit instanceof Alimentaire_1.default) {
            return produit.poids * 500 * this._distance;
        }
        else if (produit instanceof Materiel_1.default) {
            return produit.poids * 600 * this._distance;
        }
        else {
            throw new Error("Type de produit non supporté pour la cargaison routière.");
        }
    }
    ajouterProduit(produit) {
        if (this._produit.length >= 10) {
            throw new Error("Impossible d'ajouter : la cargaison routière est pleine.");
        }
        if (produit instanceof Chimique_1.default) {
            throw new Error("Les produits chimiques sont interdits en cargaison routière.");
        }
        this._produit.push(produit);
        console.log(`Produit ${produit.libelle} ajouté. Montant actuel de la cargaison : ${this.sommeTotaleC()}F`);
    }
}
exports.default = Routiere;
//# sourceMappingURL=Routiere.js.map