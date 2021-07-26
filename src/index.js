
const jokeUrl = 'https://api.chucknorris.io/jokes/random';


// fetch(jokeUrl).then(resp => {
//   resp.json().then(({ id, value }) => {
//     console.log(id);
//     console.log(value);
//   });
// });

// fetch( jokeUrl )
//   .then( resp => resp.json() )
//   .then(console.log);
// Lo anterior puede convertirse en lo siguiente  

fetch( jokeUrl )
  .then( resp => resp.json() )
  .then( ({id,value})=>{
    console.log(id,value);
  });
  