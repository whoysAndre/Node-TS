
//Creamos nuestra factory function
const buildMakePerson = ({getUuid, getAge})=>{

  return ({name,birthdate})=>{
    
    return {
      id: getUuid(),
      name: name,
      birthdate,
      
      age: getAge(birthdate)
    }
  };

}

module.exports = {
  buildMakePerson
}

