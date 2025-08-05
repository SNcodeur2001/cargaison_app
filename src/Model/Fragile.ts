import Materiel from "./Materiel";

export default class Fragile extends Materiel {
    public constructor(libelle: string, poids: number) {
        super(libelle, poids);
    }

    public info(): void {
        console.log(`Produit Fragile - Libellé: ${this.libelle}, Poids: ${this.poids}kg`);
    }
}