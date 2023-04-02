console.log('----------2.Rectangel-----------------------');

class Rectangle{
    constructor(width,height){
        this.height=height;
        this.width=width;
        this.color=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    }
    areaRect(){
        return this.height*this.width;
        
    }                   //Kuo skiriasi this.width nuo width???
    perimeter(){
        return 2*heigth+2*width
    }
};
let width=20;
let heigth=5;
let rect1=new Rectangle(width,heigth);
let areaRect1=new Rectangle(width,heigth).areaRect();
let perimeter=new Rectangle(width, heigth).perimeter();
console.log('Objektas:',rect1);
console.log('Plotas:',areaRect1);
console.log('Perimetras',perimeter);

console.log('---------3.Linijos ilgis------------------------');

let points={x0:0, y0:0, x1:2,y1:1};

class Linija{
    constructor({x0,y0,x1,y1}){
        this.x0=x0;
        this.y0=y0;
        this.x1=x1;
        this.y1=y1;
    }
    linijosIlgis(){
        return Math.hypot(this.x0-this.x1, this.y0-this.y1);
     }
}

let ilgisLinija=new Linija(points).linijosIlgis();
console.log('Nuotolis tap taškų:',ilgisLinija);

/* let xIlgis=points[0].x-points[1].x;
let yIlgis=points[0].y-points[1].y;
console.log(yIlgis,xIlgis);
class Linija{
    constructor (ilgisX,ilgisY){
        this.ilgisX=ilgisX;
        this.ilgisY=ilgisY;
    }
    linijosIlgis(){
       return Math.hypot(this.ilgisX, this.ilgisY);
    }

}

console.log(new Linija(xIlgis,yIlgis));
let linijosIlgis1=new Linija(xIlgis,yIlgis).linijosIlgis();
console.log(linijosIlgis1); */

console.log('---------4.Kubas------------------------');

let ilgis=3;
let plotis=3;
let aukstis=3;

class Kubas {
    constructor (ilgis,plotis,aukstis){
        this.ilgis=ilgis;
        this.plotis=plotis;
        this.aukstis=aukstis;
    }
    turis(){
        return this.ilgis*this.aukstis*this.plotis
    }
    pavirsius(){
        return this.ilgis*this.plotis*2+this.plotis*this.aukstis*2+this.ilgis*this.aukstis*2
    }
    perimetras(){
        return this.aukstis*4+this.ilgis*4+this.plotis*4
    }
}
let turis=new Kubas(ilgis,aukstis,plotis).turis();
let pavirsius=new Kubas(ilgis,aukstis,plotis).pavirsius();
let perimetras=new Kubas(ilgis,aukstis,plotis).perimetras();
console.log('Tūris',turis);
console.log('Paviršiaus plotas',pavirsius);
console.log('Perimetras',perimetras);

console.log('------------x.Taškai trimatėje erdvėje--------------------');

class Point3D{
    constructor(x, y, z){
      this.x = x;
      this.y = y;
      this.z = z;
      
    }
    distance(point){
      return Math.hypot(this.x-point.x, this.y-point.y, this.z-point.z);
    }
  }
  
  const points3D = [
    new Point3D(0, 0, 0),
    new Point3D(10, 10, 3),
  ];
  console.log('Linijos ilgis:',points3D[0].distance(points3D[1]));
