const Restaurante = require('../models/Restaurante');

module.exports = {


   async index(request, response){
     const restaurantes = await Restaurante.find(); 
     return response.json(restaurantes);
   },
    
   async delete(request, response){
    const { restauranteNome } = (request.body);
    restaurante = await Restaurante.deleteOne({restauanteNome});
    return response.json(restaurante);

},
   

   async store(request, response){
        const { restauranteNome, cidade, contato } = (request.body);
        
        let restaurante = await Restaurante.findOne({ restauranteNome });

         
          if(!restaurante){
            
                
            restaurante = await Restaurante.create({
                restauranteNome,
                cidade,
                contato
        
            });

          };
            
        
            return response.json(restaurante);

      
        
    }
};