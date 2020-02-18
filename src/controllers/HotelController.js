const Hotel = require('../models/Hotel');

module.exports = {


   async index(request, response){
     const hoteis = await Hotel.find(); 
     return response.json(hoteis);
   },
  
   async delete(request, response){
    const { hotelNome } = (request.body);
    hotel = await Hotel.deleteOne({hotelNome});
    return response.json(hotel);

    },

   async store(request, response){
        const {  hotelNome, cidade, contato } = (request.body);
        
        let hotel = await Hotel.findOne({ hotelNome });

         
          if(!hotel){
            
                
            hotel = await Hotel.create({
                hotelNome,
                cidade,
                contato
        
            });

          };
            
        
            return response.json(hotel);

      
        
    }
};