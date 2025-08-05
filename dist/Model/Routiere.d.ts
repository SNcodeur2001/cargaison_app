import Alimentaire from "./Alimentaire";
import Cargaison from "./Cargaison";
import Chimique from "./Chimique";
import Materiel from "./Materiel";
export default class Routiere extends Cargaison {
    constructor(distance: number);
    calculerFrais(produit: Alimentaire | Materiel): number;
    ajouterProduit(produit: Chimique | Alimentaire | Materiel): void;
}
//# sourceMappingURL=Routiere.d.ts.map