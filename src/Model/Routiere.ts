import Alimentaire from "./Alimentaire";
import Cargaison from "./Cargaison";
import Chimique from "./Chimique";
import Materiel from "./Materiel";

class Routiere extends Cargaison{

    ajouterProduit(produit:Chimique|Alimentaire|Materiel): void {
    if (this._produit.length >= 10) {
      throw new Error("Impossible d'ajouter : la cargaison routière est pleine.");
    }

    if (produit instanceof Chimique) {
      throw new Error("Les produits chimiques sont interdits en cargaison routière.");
    }

    this._produit.push(produit);
  }
}