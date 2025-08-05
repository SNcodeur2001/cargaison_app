"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Materiel_1 = require("./Materiel");
class Incassable extends Materiel_1.default {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        console.log(`Produit Incassable - Libellé: ${this.libelle}, Poids: ${this.poids}kg`);
    }
}
exports.default = Incassable;
//# sourceMappingURL=Incassable.js.map