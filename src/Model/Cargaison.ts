import Produit from "./Produit";

export default abstract class Cargaison<T extends Produit = Produit> {
  protected _produit: T[];
  protected _distance: number;

  protected constructor(distance: number) {
    this._distance = distance;
    this._produit = [];
  }

  public abstract calculerFrais(produit: T): number;

  abstract ajouterProduit(produit: T): void;

  public getProduit(): T[] {
    return this._produit;
  }

  public getDistance(): number {
    return this._distance;
  }

  public setDistance(distance: number): void {
    if (distance <= 0) {
      throw new Error("La distance doit être supérieure à zéro.");
    }
    this._distance = distance;
  }

  public sommeTotaleC(): number {
    return this._produit.reduce((total, produit) => {
      return total + this.calculerFrais(produit);
    }, 0);
  }

  public nbProduit1(): number {
    return this._produit.length;
  }
}
