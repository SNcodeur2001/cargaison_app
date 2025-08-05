import Cargaison from "./Cargaison";
import Materiel from "./Materiel";
import Chimique from "./Chimique";
import Alimentaire from "./Alimentaire";
import Fragile from "./Fragile";

export default class Maritime extends Cargaison {
  public constructor(distance: number) {
    super(distance);
  }

  public calculerFrais(produit: Chimique | Alimentaire | Materiel): number {
    if (produit instanceof Chimique) {
      const fraisBase = produit.poids * 1000 * this._distance;
      const fraisEntretien = produit.toxicite * 500; 
      return fraisBase + fraisEntretien;
    } else if (produit instanceof Alimentaire) {
      // Frais alimentaire : 90F/kg/km + 5000F de chargement
      return (produit.poids * 90 * this._distance) + 5000;
    } else if (produit instanceof Materiel) {
      // Seuls les produits incassables sont acceptés (600F/kg/km)
      if (produit instanceof Fragile) {
        throw new Error("Les produits fragiles ne peuvent pas être transportés par voie maritime.");
      }
      return produit.poids * 600 * this._distance;
    } else {
      throw new Error("Type de produit non reconnu.");
    }
  }

  public ajouterProduit(produit: Chimique | Alimentaire | Materiel): void {
    if (this._produit.length >= 10) {
      throw new Error("Impossible d'ajouter : la cargaison maritime est pleine.");
    }

    // Vérifier si c'est un produit fragile
    if (produit instanceof Fragile) {
      throw new Error("Les produits fragiles sont interdits en cargaison maritime.");
    }

    this._produit.push(produit);
    console.log(`Produit ${produit.libelle} ajouté. Montant actuel de la cargaison : ${this.sommeTotaleC()}F`);
  }
}