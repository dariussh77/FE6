const text1='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores erat recusandae!  Aliquid velit ad porro reiciendis laboriosam maxime asperiores?';
const text2='Esse maxime praesentium accusantium rerum, voluptate temporibus veniam nihil molestias etur. Odio, dolores ut.';
let qIntro=document.querySelector('#intro');
qIntro.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('iframe');
    img.setAttribute('src','./resources/tab-1.mp4');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('Intro');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let p1Text=document.createTextNode(text1);
    p1.appendChild(p1Text);
    let p2=document.createElement('p');
    let p2Text=document.createTextNode(text2);
    p2.appendChild(p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});
let qWork=document.querySelector('#work');
qWork.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.setAttribute('src','./resources/tab-2.jpg');
    img.setAttribute('alt', 'Works');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('Works');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let p1Text=document.createTextNode(text1);
    p1.appendChild(p1Text);
    let p2=document.createElement('p');
    let p2Text=document.createTextNode(text2);
    p2.appendChild(p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});
let qAbout=document.querySelector('#about');
qAbout.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.setAttribute('src','./resources/tab-3.jpg');
    img.setAttribute('alt', 'Komanda');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('About');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let p1Text=document.createTextNode(text1);
    p1.appendChild(p1Text);
    let p2=document.createElement('p');
    let p2Text=document.createTextNode(text2);
    p2.appendChild(p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});
let qContacts=document.querySelector('#contacts');
qContacts.addEventListener('click',()=>{
    let qhero=document.querySelector('#hero');
    qhero.classList.add('displayNone');
    let qbuttons=document.querySelector('#buttons');
    qbuttons.classList.add('displayNone');

    let qtabs=document.querySelector('#tabs');
    let div=document.createElement('div');
    let img=document.createElement('img');
    img.setAttribute('src','./resources/tab-4.jpg');
    img.setAttribute('alt', 'Kontaktai');
    let h1=document.createElement('h1');
    let h1Text=document.createTextNode('Contacts');
    h1.appendChild(h1Text);
    let p1=document.createElement('p');
    let i1=document.createElement('i');
    i1.classList.add('bi');
    i1.classList.add('bi-telephone');
    let p1Text=document.createTextNode(' : +370 600 00000');
    p1.append(i1,p1Text);
    let p2=document.createElement('p');
    let i2=document.createElement('i');
    i2.classList.add('bi');
    i2.classList.add('bi-envelope-at');
    let p2Text=document.createTextNode(' : smart@smarty.lt');
    p2.append(i2,p2Text);
    let xButton=document.createElement('div');
    xButton.classList.add('x');
    let xImg=document.createElement('img');
    xImg.setAttribute('src','./resources/xmark-solid.svg');
    xImg.setAttribute('alt','X mygtukas');
    xButton.appendChild(xImg);

    div.append(h1,img,p1,p2,xButton);
    qtabs.appendChild(div);

    let qXbutton=document.querySelector('.x');
    qXbutton.addEventListener('click',()=>{
        let qtabsDiv=document.querySelector('#tabs>div');
        qtabsDiv.remove();
        qhero.classList.remove('displayNone');
        qbuttons.classList.remove('displayNone');
    })
});