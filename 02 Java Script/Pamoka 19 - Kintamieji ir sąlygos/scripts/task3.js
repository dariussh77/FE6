console.group('II U=duotis Nr.3');
let asmuo={
    vardas:prompt('Koks tavo vardas?'),
    pavarde:prompt('Kokia pavardė?'),
    lytis:prompt('Kokia lytis?','v / m / vm'),
    batuDydis:prompt('Koks batų dydis?')
};

if(asmuo.lytis==="m") {
    alert('Mergaitės į dešinę....')
}else if (asmuo.lytis==="v") {
    alert('Berniukai kairę....')
}else if(asmuo.lytis==="vm") {
    alert('Jums į bendrą....')
}else{
    alert('Neapsisprendei - tai teks į kelnes')
};
if(asmuo.batuDydis>=47){
    alert('OOOOO gal būsi SABAS')
};
console.log(asmuo);
console.groupEnd('II U=duotis Nr.3');