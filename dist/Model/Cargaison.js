"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cargaison {
    constructor(distance) {
        this._distance = distance;
        this._produit = [];
    }
    getProduit() {
        return this._produit;
    }
    getDistance() {
        return this._distance;
    }
    setDistance(distance) {
        if (distance <= 0) {
            throw new Error("La distance doit être supérieure à zéro.");
        }
        this._distance = distance;
    }
    sommeTotaleC() {
        return this._produit.reduce((total, produit) => {
            return total + this.calculerFrais(produit);
        }, 0);
    }
    nbProduit1() {
        return this._produit.length;
    }
}
exports.default = Cargaison;
//# sourceMappingURL=Cargaison.js.map