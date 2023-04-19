import {data} from './data.js';
let qTrailer=document.querySelector('#trailer');
let fTrailer=()=>{
    const timeOutSeconds=2;
    data.forEach((e,i)=>{
        let timeOut=setTimeout(()=>{
            qTrailer.style.backgroundImage = `url(${e.image_src})`;
        },i*timeOutSeconds*1000);
        qTrailer.addEventListener('click',()=>clearTimeout(timeOut));
        qTrailer.addEventListener('click',()=>clearTimeout(intervalTimeout));  
    });
    let intervalTimeout=setInterval(()=>fTrailer(),timeOutSeconds*data.length*1000); 
};    
fTrailer();
qTrailer.addEventListener('click',fTrailer);