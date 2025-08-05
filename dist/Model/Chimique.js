"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produit_1 = require("./Produit");
class Chimique extends Produit_1.default {
    constructor(libelle, poids, toxicite) {
        super(libelle, poids);
        this._toxicite = toxicite;
    }
    get toxicite() {
        return this._toxicite;
    }
    set toxicite(value) {
        if (value < 1 || value > 10) {
            throw new Error("La toxicité doit être entre 1 et 10.");
        }
        this._toxicite = value;
    }
    info() {
        console.log(`Produit Chimique - Libellé: ${this.libelle}, Poids: ${this.poids}kg, Toxicité: ${this.toxicite}/10`);
    }
}
exports.default = Chimique;
//# sourceMappingURL=Chimique.js.map