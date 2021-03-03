'use strict';

module.exports = function(request, response, next){
  console.log('validator', request.params);
  if(!(request.params.id)){
    next('Invalid ID !');
  }else{
    next();
  }

};