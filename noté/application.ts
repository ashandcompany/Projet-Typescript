class Pokemon {

    private nom : string ;
    private pointsDeVie : number ;
    private pointsAttaque : number ;

    constructor ( nom : string, pointsDeVie : number, pointsAttaque : number ){

        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        
    }

    get_nom(): string {
        return this.nom;
    }

    get_pointsDeVie(): number {
        return this.pointsDeVie;
    }

    set_pointsDeVie(pdv: number): void {
        this.pointsDeVie = pdv;
    }

    get_pointsAttaque(): number {
        return this.pointsAttaque;
    }

    afficher_informations() : void{
        console.log (`--- Pokemon : ${this.nom}. HP restants : ${this.pointsDeVie} HP. Attaque : ${this.pointsAttaque}. ---`)
    }

    estMort() : boolean {
        return( this.pointsDeVie <= 0) ;
    }

    attaquer(p : Pokemon) : void{
        console.log(`Oh non ! ${p.get_nom()} a perdu ${this.pointsAttaque} HP face à ${this.get_nom()} !`)
        p.set_pointsDeVie( p.pointsDeVie - this.pointsAttaque );
    }
}

class Feu extends Pokemon {
    constructor(nom: string, pointsDeVie: number, pointsAttaque: number) {
        super(nom, pointsDeVie, pointsAttaque);
    }

    attaquer(p: Pokemon): void {
        if (p instanceof Feu || p instanceof Eau) {
            console.log(`C'est peu efficace ! ${p.get_nom()} a perdu ${this.get_pointsAttaque() / 2} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - (this.get_pointsAttaque() / 2));
        } else if (p instanceof Plante) {
            console.log(`C'est SUPER EFFICACE ! ${p.get_nom()} a perdu ${this.get_pointsAttaque() * 2} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - (this.get_pointsAttaque() * 2));
        } else {
            console.log(`Oh non ! ${p.get_nom()} a perdu ${this.get_pointsAttaque()} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - this.get_pointsAttaque());
        }
    }
}

class Eau extends Pokemon {
    constructor(nom: string, pointsDeVie: number, pointsAttaque: number) {
        super(nom, pointsDeVie, pointsAttaque);
    }

    attaquer(p: Pokemon): void {
        if (p instanceof Eau || p instanceof Plante) {
            console.log(`C'est peu efficace ! ${p.get_nom()} a perdu ${this.get_pointsAttaque() / 2} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - (this.get_pointsAttaque() / 2));
        } else if (p instanceof Feu) {
            console.log(`C'est SUPER EFFICACE ! ${p.get_nom()} a perdu ${this.get_pointsAttaque() * 2} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - (this.get_pointsAttaque() * 2));
        } else {
            console.log(`Oh non ! ${p.get_nom()} a perdu ${this.get_pointsAttaque()} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - this.get_pointsAttaque());
        }
    }
}

class Plante extends Pokemon {
    constructor(nom: string, pointsDeVie: number, pointsAttaque: number) {
        super(nom, pointsDeVie, pointsAttaque);
    }

    attaquer(p: Pokemon): void {
        if (p instanceof Plante || p instanceof Feu) {
            console.log(`C'est peu efficace ! ${p.get_nom()} a perdu ${this.get_pointsAttaque() / 2} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - (this.get_pointsAttaque() / 2));
        } else if (p instanceof Eau) {
            console.log(`C'est SUPER EFFICACE ! ${p.get_nom()} a perdu ${this.get_pointsAttaque() * 2} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - (this.get_pointsAttaque() * 2));
        } else {
            console.log(`Oh non ! ${p.get_nom()} a perdu ${this.get_pointsAttaque()} HP face à ${this.get_nom()} !`);
            p.set_pointsDeVie(p.get_pointsDeVie() - this.get_pointsAttaque());
        }
    }
}

let pikachu = new Pokemon("Pikachu",10,6);
let bulbizarre = new Pokemon("Bulbizarre",23,2);

console.log(pikachu.estMort());

pikachu.afficher_informations();
bulbizarre.attaquer(pikachu);
pikachu.afficher_informations();

let salameche = new Feu("Salamèche",10,6);
let gruikui = new Feu("Gruikui",23,2);
let carapuce = new Eau("Carapuce",15,8);
let vipeliere = new Plante("Vipélière",18,3);

gruikui.afficher_informations();
salameche.attaquer(gruikui);
gruikui.afficher_informations();

carapuce.afficher_informations();
vipeliere.afficher_informations();

gruikui.attaquer(carapuce);
gruikui.attaquer(vipeliere);

carapuce.afficher_informations();
vipeliere.afficher_informations();

vipeliere.attaquer(pikachu);