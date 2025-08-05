import Produit from "./Produit";
type Toxicite = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export default class Chimique extends Produit {
  private _toxicite: Toxicite;

  public constructor(libelle: string, poids: number, toxicite: Toxicite) {
    super(libelle, poids);
    this._toxicite = toxicite;
  }

  public get toxicite(): Toxicite {
    return this._toxicite;
  }

  public set toxicite(value: Toxicite) {
    if (value < 1 || value > 10) {
      throw new Error("La toxicité doit être entre 1 et 10.");
    }
    this._toxicite = value;
  }

  public info(): void {
    console.log(`Produit Chimique - Libellé: ${this.libelle}, Poids: ${this.poids}kg, Toxicité: ${this.toxicite}/10`);
}
}
