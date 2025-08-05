"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Materiel_1 = require("./Materiel");
class Fragile extends Materiel_1.default {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        console.log(`Produit Fragile - Libellé: ${this.libelle}, Poids: ${this.poids}kg`);
    }
}
exports.default = Fragile;
//# sourceMappingURL=Fragile.js.map