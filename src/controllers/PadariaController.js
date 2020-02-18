const Padaria = require('../models/Padaria');

module.exports = {


   async index(request, response){
     const padarias = await Padaria.find(); 
     return response.json(padarias);
   },
   
   async delete(request, response){
    const { padariaNome } = (request.body);
    padaria = await Padaria.deleteOne({padariaNome});
    return response.json(padaria);

},

   async store(request, response){
        const {  padariaNome, cidade, contato } = (request.body);
        
        let padaria = await Padaria.findOne({ padariaNome });

         
          if(!padaria){
            
                
            padaria = await Padaria.create({
                padariaNome,
                cidade,
                contato
        
            });

          };
            
        
            return response.json(padaria);

      
        
    }
};