import Post from './posts.js'
//const res=fetch('https://jsonplaceholder.typicode.com/posts')
//console.log(res);                                                 Netinka, nes grazins be duomenu, nes dar jie dar neatėjo.
//const res=await fetch('https://jsonplaceholder.typicode.com/posts');   //galima taip
//console.log(res);                                                


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
       return response.json()
    })
    .then(data=>{
        console.log(data);
        data.forEach(element => {document.querySelector('body').innerHTML+=`<h1> ${element.name}</h1>`
            
        });
    })
    .catch(error=>{
        //kazka atliekame suu klaidomis
        console.log(error.message);
    })
    .finally(()=>console.log('Pabaiga')) //apvaizduojama net klaidos atveju

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>{
            console.log(posts);
            const allPosts=document.querySelector('#allPosts');
            posts.forEach(post=>{
                const newPost =new Post(post);
                allPosts.appendChild(newPost);
            })
        });



/* fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(posts=>{
        console.log(posts);
        const allPosts=document.querySelector('#allPosts');
        posts.forEach(post=>{
            const newPost =new Post(post);
            allPosts.appendChild(newPost);
        })
    }); */

