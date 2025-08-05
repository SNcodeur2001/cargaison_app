import Produit from "./Produit";
export default abstract class Cargaison<T extends Produit = Produit> {
    protected _produit: T[];
    protected _distance: number;
    protected constructor(distance: number);
    abstract calculerFrais(produit: T): number;
    abstract ajouterProduit(produit: T): void;
    getProduit(): T[];
    getDistance(): number;
    setDistance(distance: number): void;
    sommeTotaleC(): number;
    nbProduit1(): number;
}
//# sourceMappingURL=Cargaison.d.ts.map