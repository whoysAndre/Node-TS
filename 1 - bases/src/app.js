
// ? Importo mi archivo y lo puedo ejecutar esto nos servirá
// ? Para importar paquetes que mas adelante instalaremos
// require('./js-foundation/01-template');

// ? Este tipo de importación es para acceder a una funcion 
// const { emailTemplate } =  require('./js-foundation/01-template');


// require('./js-foundation/02-destructuring');

//TEMA: CALLBACKS
const {getUserById} = require('./js-foundation/03-callbacks');

getUserById(1,(error,user)=>{
  if(error){
    throw new Error('User not found');
  }

  // console.log(user);
});


//TEMA: FACTORY FUNCTION
const { getAge,getUuid }  = require('./plugins/index');
const {buildMakePerson} = require('./js-foundation/04-factory');

//Con esto podemos instaciar este objeto
const makePerson = buildMakePerson({getUuid,getAge})


const obj = {name: 'Jhon Doe',birthdate: '21-02-2003'};
const jhon = makePerson(obj);

console.log(jhon);