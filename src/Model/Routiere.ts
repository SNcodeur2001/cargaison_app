import Alimentaire from "./Alimentaire";
import Cargaison from "./Cargaison";
import Chimique from "./Chimique";
import Materiel from "./Materiel";

export default class Routiere extends Cargaison {
  public constructor(distance: number) {
    super(distance);
  }

  public calculerFrais(produit: Alimentaire | Materiel): number {
    if (produit instanceof Alimentaire) {
      return produit.poids * 500 * this._distance;
    } else if (produit instanceof Materiel) {
      return produit.poids * 600 * this._distance;
    } else {
      throw new Error("Type de produit non supporté pour la cargaison routière.");
    }
  }

  public ajouterProduit(produit: Chimique | Alimentaire | Materiel): void {
    if (this._produit.length >= 10) {
      throw new Error("Impossible d'ajouter : la cargaison routière est pleine.");
    }

    if (produit instanceof Chimique) {
      throw new Error("Les produits chimiques sont interdits en cargaison routière.");
    }

    this._produit.push(produit);
    console.log(`Produit ${produit.libelle} ajouté. Montant actuel de la cargaison : ${this.sommeTotaleC()}F`);
  }
}