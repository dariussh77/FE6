// function car(make, model, year){
//   return {
//     make: make,
//     model: model,
//     year: year
//   }
// }

class Car{
  #make; #model; #year; #color; #basePrice; #engineType; #photo;
  constructor({make, model, year, basePrice, engineType, photo}){
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // rgb 0-255 *3
    this.#basePrice = basePrice;
    this.#engineType = engineType;
    this.#photo = photo;
  }
  getMake(){
    return this.#make;
  }
  setMake(newMake){
    this.#make = newMake;
  }
  getModel(){
    return this.#model;
  }
  setModel(newModel){
    this.#model = newModel;
  }
  getYear(){
    return this.#year;
  }
  setYear(newYear){
    this.#year = newYear;
  }
  getColor(){
    return this.#color;
  }
  setColor(newColor){
    this.#color = newColor;
  }
  getEngineType(){
    return this.#engineType;
  }
  setEngineType(newEngineType){
    this.#engineType = newEngineType;
  }
  getBasePrice(){
    return this.#basePrice;
  }
  getPrice(){
    switch(this.#engineType){
      case 'gas':
        return this.#basePrice+300;
      case 'petrol':
        return this.#basePrice+600;
      case 'electric':
        return this.#basePrice+2500;
      default:
        return this.#basePrice;
    }
  }
  getPhoto(){
    return this.#photo;
  }
  setPhoto(newPhoto){
    this.#photo = newPhoto;
  }
  
  turnEngineOn(){
    return 'Vroom!!!';
  }
  getCarAge(){
    return new Date().getFullYear() - this.#year;
  }
}

const carsData = [
  {
    make: 'Volkswagen',
    model: 'Passat',
    year: 2005,
    basePrice: 500,
    engineType:'gas',
    photo: 'https://content-images.carmax.com/qeontfmijmzv/MY19MKj0XutK084z874jt/9632621fd8464b5c0e54a9dee64ad4e5/tesla.jpg'
  },{
    make: 'Audi',
    year: 2010,
    basePrice: 1200,
    engineType:'petrol',
    model: 'TT',
    photo: 'https://media.wired.co.uk/photos/63b8c50e7d4b632fbb395e37/4:3/w_2400,h_1800,c_limit/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg'
  },{
    basePrice: 3400,
    model: '6',
    year: 2015,
    make: 'BMW',
    engineType:'electric',
    photo: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg'
  },{
    make: 'Fiat',
    model: 'Punto',
    year: 2001,
    basePrice: 400,
    engineType:'petrol',
    photo: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg'
  }
];
const carsObjects = carsData.map(car => new Car(car));

console.log(carsObjects);
console.log(carsObjects[0].make);
// console.log(carsObjects[0].#make); // grąžina error, nes negalime krieptis į privačius
console.log(carsObjects[0].getMake());
// console.log(carsData[0].getMake()); // grąžina error, nes paprasti duomenys neturi metodų

carsObjects.forEach(car => {
  document.querySelector('#allCars').innerHTML += `
    <div class="car">
      <h1>${car.getMake()} ${car.getModel()}</h1>
      <img src="${car.getPhoto()}" alt="${car.getMake()} ${car.getModel()} photo">
      <div class="carSpecs">
        <div>
          <p>YoM: ${car.getYear()}</p>
          <p>Engine: ${car.getEngineType()}</p>
          <p>Color: <span style="background-color:${car.getColor()}"></span></p>
        </div>
        <div>
          <p>Price: ${car.getPrice()} &euro;</p>
        </div>
      </div>
    </div>
  `;
});

document.querySelector('#newCars>form').addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
  console.log(e.target.elements);
  let car = {
    make: e.target.elements.make.value,
    model: e.target.elements.model.value,
    year: e.target.elements.year.valueAsNumber,
    basePrice: e.target.elements.basePrice.valueAsNumber,
    engineType: e.target.elements.engineType.value,
    photo: e.target.elements.photo.value
  };
  console.log(car);
  const coolCar = new Car(car);
  console.log(coolCar);
  document.querySelector('#allCars').innerHTML += `
    <div class="car">
      <h1>${coolCar.getMake()} ${coolCar.getModel()}</h1>
      <img src="${coolCar.getPhoto()}" alt="${coolCar.getMake()} ${coolCar.getModel()} photo">
      <div class="carSpecs">
        <div>
          <p>YoM: ${coolCar.getYear()}</p>
          <p>Engine: ${coolCar.getEngineType()}</p>
          <p>Color: <span style="background-color:${coolCar.getColor()}"></span></p>
        </div>
        <div>
          <p>Price: ${coolCar.getPrice()} &euro;</p>
        </div>
      </div>
    </div>
  `;
});

class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
    this.color = `#${Math.floor(Math.random()*16777256).toString(16)}`
  }
  area(){
    return this.width * this.height;
  }
  perimeter(){
    return this.width*2 + this.height*2;
  }
}

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
  new Point3D(10, 10, 3)
];
console.log(points3D[0].distance(points3D[1]));