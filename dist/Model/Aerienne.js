"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cargaison_1 = require("./Cargaison");
const Materiel_1 = require("./Materiel");
const Chimique_1 = require("./Chimique");
const Alimentaire_1 = require("./Alimentaire");
class Aerienne extends Cargaison_1.default {
    constructor(distance) {
        super(distance);
    }
    calculerFrais(produit) {
        if (produit instanceof Alimentaire_1.default) {
            return produit.poids * 300 * this._distance;
        }
        else if (produit instanceof Materiel_1.default) {
            return produit.poids * 100 * this._distance;
        }
        else {
            // Si jamais un produit chimique est passé par erreur
            throw new Error("Les produits chimiques ne sont pas acceptés en cargaison aérienne.");
        }
    }
    ajouterProduit(produit) {
        if (this._produit.length >= 10) {
            throw new Error("Impossible d'ajouter : la cargaison Aerienne est pleine.");
        }
        if (produit instanceof Chimique_1.default) {
            throw new Error("Les produits chimiques sont interdits en cargaison aeriennes.");
        }
        this._produit.push(produit);
    }
}
exports.default = Aerienne;
//# sourceMappingURL=Aerienne.js.map