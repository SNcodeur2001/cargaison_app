import Produit from "./Produit";

export default class Alimentaire extends Produit{

    public constructor(libelle:string,poids:number){
        super(libelle,poids);
    }
    
}