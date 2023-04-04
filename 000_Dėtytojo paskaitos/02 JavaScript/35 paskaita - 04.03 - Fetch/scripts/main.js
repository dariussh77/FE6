import Post from './Post.js';

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // console.log(data);
    data.forEach(user => {
      document.querySelector('#test').innerHTML += `<h1>${user.name}</h1>`
    })
  })
  .catch(err => {
    console.log(err.message);
  })
  .finally(() => {
    // console.log('end');
  })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    const allPosts = document.querySelector('#allPosts');
    posts.forEach(post => {
      // console.log(post);
      const newPost = new Post(post);
      allPosts.appendChild(newPost);
    });
  });

fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0]);
  })