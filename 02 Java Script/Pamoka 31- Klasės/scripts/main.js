//                  Klasės

/* function car(make, model,year){

}; */
class Car{
    #make;#model;#year;#color;#basePrice; #engineType; #photo//nebūtina žinoti - privačių duomenų
    constructor({make, model, year,basePrice, engineType,photo}){
        this.#make=make;
        this.#model=model;
        this.#year=year;
        this.#color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`; // rgb 0-255 *3
        this.#basePrice=basePrice;
        this.#engineType=engineType;
        this.#photo=photo;
    }
    getPhoto(){
    return this.#photo;
    }
    setPhoto(newPhoto){
    this.#photo = newPhoto;
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
            case 'gas': return this.#basePrice+300;
            case 'diesel': return this.#basePrice+600;
            case 'LPG': return this.#basePrice+100;
            default: this.#basePrice;
        }
    }
    turnEngineOn(){
        return 'Vroom';
    }
    getcarAge(){
        return new Date().getFullYear()-this.#year;
    }
};
const carsData=[
    {
        make:'Vokswagen',
        model:'Passat',
        year:2005,
        basePrice:500,
        engineType:'gas',
        photo:"https://picsum.photos/id/514/600/400" 
    },
   {
        make:'Audi',
        model:'TT',
        year:2010,
        basePrice:5000,
        engineType:'gas',
        photo:"https://picsum.photos/id/605/600/400"
    },
    {
        make:'BMW',
        model:'6',
        year:2015,
        basePrice:7000,
        engineType:'diesel',
        photo:"https://picsum.photos/id/655/600/400"
    },
    {
        make:'Fiat',
        model:'Punto',
        year:2001,
        basePrice:500,
        engineType:'LPG',
        photo:"https://picsum.photos/id/111/600/400"
    }
];
const carObjects=carsData.map(car => new Car(car));
console.log('Automobiulių Class Masyvas:',carObjects);
console.log('Nepasiekiamas make, nes privatus:',carObjects[0].make);
console.log('Pasiekiamas make tik per getMake():',carObjects[0].getMake());

console.log('--------------------------------',);
console.log('',);

///                     Inner html

carObjects.forEach(car=>{
    document.querySelector('#allCars').innerHTML+=`
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
 `           
    
});
document.querySelector('#newCars>form').addEventListener('submit', e=>{
        e.preventDefault();
        console.log('Eventas?:',e);
        console.log('Elements?:',e.target.elements);
        let car={
            make:e.target.elements.make.value,
            model:e.target.elements.model.value,
            year:e.target.elements.year.value,
            basePrice:e.target.elements.basePrice.valueAsNumber,
            engineType:e.target.elements.engineType.value,
            photo:e.target.elements.photo.value
        };
        console.log('Automobilio įvedimas iš HTML:',car);
        const coolCar=new Car(car);
        console.log('Coolcar:', coolCar);
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