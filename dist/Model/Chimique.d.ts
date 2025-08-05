import Produit from "./Produit";
type Toxicite = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export default class Chimique extends Produit {
    private _toxicite;
    constructor(libelle: string, poids: number, toxicite: Toxicite);
    get toxicite(): Toxicite;
    set toxicite(value: Toxicite);
    info(): void;
}
export {};
//# sourceMappingURL=Chimique.d.ts.map