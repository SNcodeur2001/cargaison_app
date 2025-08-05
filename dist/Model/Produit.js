"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produit {
    constructor(libelle, poids) {
        this._libelle = libelle;
        this._poids = poids;
    }
    get poids() {
        return this._poids;
    }
    get libelle() {
        return this._libelle;
    }
}
exports.default = Produit;
//# sourceMappingURL=Produit.js.map