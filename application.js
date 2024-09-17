"use strict";
class Point {
    constructor(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    getAbs() {
        return this.abs;
    }
    getOrd() {
        return this.ord;
    }
    sePresenter() {
        console.log(`Mon abscisse est ${this.abs} et mon ordonnée ${this.ord}`);
    }
    calculerDistance(point) {
        let distance = Math.sqrt(Math.pow(point.abs - this.abs, 2) + Math.pow(point.ord - this.ord, 2));
        return distance;
    }
    calculerMilieu(p) {
        let x = (p.abs + this.abs) / 2;
        let y = (p.ord + this.ord) / 2;
        let z = new Point(x, y);
        return z;
    }
}
let a = new Point(2, 3);
a.sePresenter();
let b = new Point(5, 7);
console.log(`Distance entre les deux points: ${a.calculerDistance(b)}`);
console.log(`Coordonnées du milieu : (${a.calculerMilieu(b).abs},${a.calculerMilieu(b).ord})`);
