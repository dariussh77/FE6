document
    .querySelectorAll('#git li')
    .forEach(li=>li.addEventListener('click', e=>{
        console.log(e);
        const image=document.createElement('img');
        image.setAttribute('src',"./images/confeti.gif");
        image.style.position='absolute';
        image.style.top=e.pageY+'px';
        image.style.left=e.pageX+'px';
        image.style.transform=`translate(-50%,-50%)`;
        image.style.zIndex='-1';
        document.body.appendChild(image);
        setTimeout(() => {
            image.remove();
        }, 1700);
    }))