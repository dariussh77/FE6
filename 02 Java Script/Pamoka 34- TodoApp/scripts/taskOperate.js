export default class TaskOperate{
    constructor(){}
    fTrinti(event){
        let fTrash=document.querySelector(`#d${event.target.id}`);
        console.log(event);
        fTrash.remove('div');
        console.log('Remove::::',event.target.id);
        let nr=event.target.id;
        window.localStorage.removeItem(`text${nr.slice(7)}`);
        window.localStorage.removeItem(`button${nr.slice(7)}`);
   }
   fPadaryta(event){
        let fCheck=document.querySelector(`#c${event.target.id}`)
        let fH3=document.querySelector(`#${event.target.id}`);
        console.log(fH3);
        console.log(event);
        if (event.target.classList.value==='brbi-circle'){
            fH3.classList.remove('brbi-circle');
            fH3.classList.add('brbi-check-circle');
            fCheck.classList.remove('bi', 'bi-circle');
            fCheck.classList.add('bi', 'bi-check-circle');
            window.localStorage.setItem(`${event.target.id}`,'bi-check-circle');
        }else{
            fH3.classList.remove('brbi-check-circle');
            fH3.classList.add('brbi-circle');
            fCheck.classList.remove('bi', 'bi-check-circle');
            fCheck.classList.add('bi', 'bi-circle');
            window.localStorage.setItem(`${event.target.id}`,'bi-circle');
        }; 
   }
}