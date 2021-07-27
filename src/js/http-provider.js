const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';


const obtenerChiste = async () => {


  try{

    const resp = await fetch(jokeUrl);
    
    if (!resp.ok) throw ('No se pudo realizar la peticion');
    
    // return await resp.json();
    // mejor desestructurando

    const {icon_url, id, value} = await resp.json();


    return { icon_url, id, value };

  }catch(err ) {
    
    // return {id:'No se encontró el error'}
    // lo correcto seria
    throw err;

  }
};

const obtenerUsuarios = async () => {

  const resp = await fetch(urlUsuarios);
  const {data: usuarios } = await resp.json();
  
  return usuarios;

}


export {
  obtenerChiste,
  obtenerUsuarios
}