import Cargaison from "./Cargaison";
import Materiel from "./Materiel";
import Chimique from "./Chimique";
import Alimentaire from "./Alimentaire";
export default class Aerienne extends Cargaison {
    constructor(distance: number);
    calculerFrais(produit: Materiel | Alimentaire): number;
    ajouterProduit(produit: Chimique | Alimentaire | Materiel): void;
}
//# sourceMappingURL=Aerienne.d.ts.map