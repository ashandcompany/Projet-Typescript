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
b.sePresenter();
let c = new Point(1, 6);
c.sePresenter();
console.log(`Distance entre les deux points: ${a.calculerDistance(b)}`);
console.log(`Coordonnées du milieu : (${a.calculerMilieu(b).abs},${a.calculerMilieu(b).ord})`);
class TroisPoints {
    constructor(a, b, c) {
        this.point1 = a;
        this.point2 = b;
        this.point3 = c;
    }
    getPoint1() {
        return this.point1;
    }
    getPoint2() {
        return this.point2;
    }
    getPoint3() {
        return this.point3;
    }
    distance(p1, p2) {
        return Math.sqrt(Math.pow((p2.abs - p1.abs), 2) + Math.pow((p2.ord - p1.ord), 2));
    }
    estEquilateral() {
        const d1 = this.distance(this.point1, this.point2);
        const d2 = this.distance(this.point2, this.point3);
        const d3 = this.distance(this.point3, this.point1);
        const tolerance = 1e-10;
        return Math.abs(d1 - d2) < tolerance && Math.abs(d2 - d3) < tolerance;
    }
}
const triangleNonEquilateral = new TroisPoints(a, b, c);
console.log(triangleNonEquilateral.estEquilateral());
let p1 = new Point(0, 0);
let p2 = new Point(1, 0);
let p3 = new Point(0.5, Math.sqrt(3) / 2);
const triangle = new TroisPoints(p1, p2, p3);
console.log(triangle.estEquilateral());
