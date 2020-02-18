const Mercado = require('../models/Mercado');

module.exports = {


   async index(request, response){
     const mercados = await Mercado.find(); 
     return response.json(mercados);
   },
   

   async delete(request, response){
       const { mercadoNome } = (request.body);
       mercado = await Mercado.deleteOne({mercadoNome});
       return response.json(mercado);

   },
   

   async store(request, response){
        const {  mercadoNome, cidade, contato } = (request.body);
        
        let mercado = await Mercado.findOne({ mercadoNome });

         
          if(!mercado){
            
                
            mercado = await Mercado.create({
                mercadoNome,
                cidade,
                contato
        
            });

          };
            
        
            return response.json(mercado);

      
        
    }
};