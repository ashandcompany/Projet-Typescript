class Pokemon {

    private nom : string ;
    private pointsDeVie : number ;
    private pointsAttaque : number ;

    constructor ( nom : string, pointsDeVie : number, pointsAttaque : number ){

        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        
    }

    get_nom() {
        return this.nom ;
    }

    set_pointsDeVie ( pdv : number ){
        this.pointsDeVie = pdv ;
    }

    afficher_informations(){
        console.log (`Pokemon : ${this.nom}. HP restants : ${this.pointsDeVie} HP. Attaque : ${this.pointsAttaque}.`)
    }

    estMort() : boolean {
        return( this.pointsDeVie <= 0) ;
    }

    attaquer(p : Pokemon){
        console.log(`Oh non ! ${p.get_nom()} a perdu ${this.pointsAttaque} HP !`)
        p.set_pointsDeVie( p.pointsDeVie - this.pointsAttaque );
    }
}

let pikachu = new Pokemon("Pikachu",10,6);
let bulbizarre = new Pokemon("Bulbizarre",23,2);

console.log(pikachu.estMort());

pikachu.afficher_informations();
bulbizarre.attaquer(pikachu);
pikachu.afficher_informations();
