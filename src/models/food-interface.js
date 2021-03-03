'use strict';

class FoodInterface{
  
  constructor(model){
    this.model= model;
  }
  read(id){
    if(id){
      return this.model.find({ _id: id});
    }
    return this.model.find({});
    

  }
  
  create(obj){
    const data = new this.model(obj);
    return data.save();

  }
 
  update(id, obj){
    return  this.model.findOneAndUpdate({_id: id}, obj, {new:true});
 

  }
  delete(id){
    this.model.findOneAndDelete({ _id: id });

  }
}

module.exports = FoodInterface;