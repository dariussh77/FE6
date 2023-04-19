/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

let movies=[
    {title:"Avataras", director:'Darius',budget:200000000},
    {title:"Širvintų grožybės", director:'Živilė',budget:500}
];

class Movie{
    constructor(props){
        this.props=props;
        return this.brangus();
    }
    brangus(){
        return this.props.budget>=100000000? console.log(true):console.log(false);
    }
}

console.log(new Movie(movies[0]));
console.log('------------------------------------------');
console.log(new Movie(movies[1]));