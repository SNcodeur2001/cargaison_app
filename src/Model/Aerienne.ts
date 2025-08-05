import Cargaison from "./Cargaison";
import Materiel from "./Materiel";
import Chimique from "./Chimique";
import Alimentaire from "./Alimentaire";

export default class Aerienne extends Cargaison {
  public constructor(distance:number) {
    super(distance)
  }

 public calculerFrais(produit: Materiel | Alimentaire): number {
  if (produit instanceof Alimentaire) {
    return produit.poids * 300 * this._distance;
  } else if (produit instanceof Materiel) {
    return produit.poids * 100 * this._distance;
  } else {
    // Si jamais un produit chimique est passé par erreur
    throw new Error("Les produits chimiques ne sont pas acceptés en cargaison aérienne.");
  }
}


  ajouterProduit(produit: Chimique | Alimentaire | Materiel): void {
    if (this._produit.length >= 10) {
      throw new Error(
        "Impossible d'ajouter : la cargaison Aerienne est pleine."
      );
    }

    if (produit instanceof Chimique) {
      throw new Error(
        "Les produits chimiques sont interdits en cargaison aeriennes."
      );
    }

    this._produit.push(produit);
  }
}
