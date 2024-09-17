class Personne {

    nom : string;
    age : number;
    private static compteur: number = 0;

    constructor(nom : string, age : number){
        this.nom = nom;
        this.age = age;
        Personne.compteur++;
    }

    sePresenter() : void {
        console.log(`Je suis ${this.nom} et j'ai ${this.age} ans.`);
    }

    static getNombreInstances(): number {
        return Personne.compteur;
    }

}

let adulte = new Personne("John", 55);
adulte.sePresenter();

class Enfant extends Personne {
    constructor( nom : string, age : number ){
        super( nom , age );
    }

    sePresenter(): void {
        super.sePresenter();
        console.log('Je suis un enfant');
    }
}

let enfant = new Enfant("Emily", 5);
enfant.sePresenter();

let enfant1 = new Enfant("Luc", 7);
enfant1.sePresenter();

console.log(`Nombre total d'instances : ${Personne.getNombreInstances()}`);
