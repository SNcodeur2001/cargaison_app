export default abstract class Produit {
  protected _libelle: string;
  protected _poids: number;

  protected constructor(libelle: string, poids: number) {
    this._libelle = libelle;
    this._poids = poids;
  }

  public get poids(): number {
    return this._poids;
  }

  public get libelle(): string {
    return this._libelle;
  }
}
