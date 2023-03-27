//ExTRA
//kodėl netinka console.log(vardas.slice(-2,0)) išgauti dvi paskutines raides.
console.group('Pasisveikinimas');
let vardas='...';
let kreipinys=[];
/* for(let i=1;((i!=5)&&(vardas=='Darius'));i++) */ /* kodėl reagovo tik į i */ 

//while (vardas != null) - kodel let loopo viduje užkabina ir neleidzia toliau eiti.
for(let i=1;i!=5&&vardas!=null;i++){
    
    vardas=prompt(i+'.Įveskite prašau savo vardą arba paspausk Cancel:');
    if (vardas===null) {
        alert('Viso!!! ;)')
    }else if(vardas.endsWith('us')){
        alert('Sveikas '+vardas.slice(0,-2) + 'au'),
        kreipinys.push(vardas)
    } else if (vardas.endsWith('as')) {
        alert('Sveikas '+vardas.slice(0,-1) + 'i'),
        kreipinys.push(vardas)
    } else if (vardas.endsWith('ė')) {
        alert('Sveika '+vardas.slice(0,-1) + 'e'),
        kreipinys.push(vardas)
    } else if (vardas.endsWith('a')) {
        alert('Sveika '+vardas.slice(0,-1) + 'a'),
        kreipinys.push(vardas)
    }else {
        alert('Keistas vardas...')
    }
};

console.log(kreipinys)
console.groupEnd('Pasisveikinimas');