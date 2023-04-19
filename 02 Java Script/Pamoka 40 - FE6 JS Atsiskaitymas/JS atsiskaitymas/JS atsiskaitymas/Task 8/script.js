/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(sk1, sk2){
        this.sk1=sk1;
        this.sk2=sk2;
    }
    suma(){
        return this.sk1+this.sk2;
    }
    atimtis(){
        return this.sk1-this.sk2;
    }
    daugyba(){
        return this.sk1*this.sk2;
    }
    dalyba(){
        return this.sk1/this.sk2;
    }
}

console.log(new Calculator(5,7).suma());
console.log(new Calculator(5,7).atimtis());
console.log(new Calculator(5,7).daugyba());
console.log(new Calculator(5,7).dalyba());
