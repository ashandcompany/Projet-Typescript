class Point {
    abs : number;
    ord : number;

    constructor(abs : number, ord : number){
        this.abs = abs;
        this.ord = ord;
    }

    getAbs(){
        return this.abs;
    }

    getOrd(){
        return this.ord;
    }

    sePresenter(){
        console.log(`Mon abscisse est ${this.abs} et mon ordonnée ${this.ord}`);
    }

    calculerDistance(point: Point): number {
        let distance = Math.sqrt(Math.pow(point.abs - this.abs, 2) + Math.pow(point.ord - this.ord, 2));
        return distance;
    }

    calculerMilieu(p : Point) {
        let x = (p.abs + this.abs) / 2;
        let y = (p.ord + this.ord) / 2;
        let z = new Point(x,y);
        return z;
    }

}

let a = new Point(2,3);
a.sePresenter();

let b = new Point(5, 7);
b.sePresenter();

let c = new Point(1, 6);
c.sePresenter();

console.log(`Distance entre les deux points: ${a.calculerDistance(b)}`);

console.log(`Coordonnées du milieu : (${a.calculerMilieu(b).abs},${a.calculerMilieu(b).ord})`);

class TroisPoints {

    private point1 : Point;
    private point2 : Point;
    private point3 : Point;

    constructor( a : Point, b : Point, c : Point){
        this.point1 = a;
        this.point2 = b;
        this.point3 = c;
    }

    public estEquilateral(): boolean {
        const d1 = this.point1.calculerDistance(this.point2);
        const d2 = this.point2.calculerDistance(this.point3);
        const d3 = this.point3.calculerDistance(this.point1);

        const tolerance = 1e-10;
        return Math.abs(d1 - d2) < tolerance && Math.abs(d2 - d3) < tolerance;
    }
}

const triangleNonEquilateral = new TroisPoints(a, b, c);

console.log(triangleNonEquilateral.estEquilateral());

let p1 = new Point(0,0);
let p2 = new Point(1,0);
let p3 = new Point(0.5,Math.sqrt(3) / 2);

const triangle = new TroisPoints(p1, p2, p3);

console.log(triangle.estEquilateral());