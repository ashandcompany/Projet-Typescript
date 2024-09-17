"use strict";
class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
        Personne.compteur++;
    }
    sePresenter() {
        console.log(`Je suis ${this.nom} et j'ai ${this.age} ans.`);
    }
    static getNombreInstances() {
        return Personne.compteur;
    }
}
Personne.compteur = 0;
let adulte = new Personne("John", 55);
adulte.sePresenter();
class Enfant extends Personne {
    constructor(nom, age) {
        super(nom, age);
    }
    sePresenter() {
        super.sePresenter();
        console.log('Je suis un enfant');
    }
}
let enfant = new Enfant("Emily", 5);
enfant.sePresenter();
let enfant1 = new Enfant("Luc", 7);
enfant1.sePresenter();
console.log(`Nombre total d'instances : ${Personne.getNombreInstances()}`);
