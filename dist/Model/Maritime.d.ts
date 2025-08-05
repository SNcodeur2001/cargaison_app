import Cargaison from "./Cargaison";
import Materiel from "./Materiel";
import Chimique from "./Chimique";
import Alimentaire from "./Alimentaire";
export default class Maritime extends Cargaison {
    constructor(distance: number);
    calculerFrais(produit: Chimique | Alimentaire | Materiel): number;
    ajouterProduit(produit: Chimique | Alimentaire | Materiel): void;
}
//# sourceMappingURL=Maritime.d.ts.map