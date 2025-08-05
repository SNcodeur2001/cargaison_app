"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produit_1 = require("./Produit");
class Alimentaire extends Produit_1.default {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        console.log(`Produit Alimentaire - Libellé: ${this.libelle}, Poids: ${this.poids}kg`);
    }
}
exports.default = Alimentaire;
//# sourceMappingURL=Alimentaire.js.map