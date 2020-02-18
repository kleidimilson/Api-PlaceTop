const User = require('../models/User');

module.exports = {


   async index(request, response){
     const users = await User.find(); 
     return response.json(users);
   },
    
   async delete(request, response){
    const { nome } = (request.body);
    user = await User.deleteOne({nome});
    return response.json(user);

     },
     async verificar(request, response){
         const { nome, senha } = (request.body);
         const users = await User.findOne({nome, senha});
         return response.json(users);

     },

   async store(request, response){
        const { nome, senha} = (request.body);
       
        let user = await User.findOne({ nome });

         
          if(!user){
            
                
            user = await User.create({
               nome, 
               senha
            });

          };
            
        
            return response.json(user);

      
        
    }
};