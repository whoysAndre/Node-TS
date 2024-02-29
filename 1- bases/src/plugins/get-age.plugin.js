//Importamos nuestro paquete
const getAgePlugin = require('get-age');


//TODO: Creamos nuestra función adaptadora
const getAge = (birthdate)=>{
  if(!birthdate) return new Error('Bithdate is required');

  return getAgePlugin(birthdate);
};


module.exports = {
  getAge
};