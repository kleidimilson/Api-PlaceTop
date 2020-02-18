const Hospital = require('../models/Hospital');

module.exports = {


   async index(request, response){
     const hospitais = await Hospital.find(); 
     return response.json(hospitais);
   },
   
   async delete(request, response){
    const { hospitalNome } = (request.body);
    hospital = await Hospital.deleteOne({hospitalNome});
    return response.json(hospital);

   },
   async store(request, response){
        const {  hospitalNome, cidade, contato } = (request.body);
        
        let hospital = await Hospital.findOne({ hospitalNome });

         
          if(!hospital){
            
                
            hospital = await Hospital.create({
                hospitalNome,
                cidade,
                contato
        
            });

          };
            
        
            return response.json(hospital);

      
        
    }
};