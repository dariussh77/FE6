const randomCollor=()=>{
    return `#${Math.floor(Math.random()*2**24).toString(16)}` //Random Color 16-ainėje
};

export default randomCollor;