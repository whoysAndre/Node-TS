
const users = [
  {id:1,name:'Jhon Doe'},
  {id:2,name:'Jhane Doe'}
];


const getUserById = (id,callback)=>{
  const user = users.find(function(user){
    return user.id === id;
  })

  if(!user){
    return callback('User not found');
  };

  return callback(null,user);

};

module.exports = {
  getUserById
}



