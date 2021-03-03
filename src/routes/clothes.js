'use strict';

const express = require('express');
const router = express.Router();
const ClothesInterface = require('../models/clothes-interface.js');
const ClothesModel = require('../models/clothes-model.js');
const clothes = new ClothesInterface(ClothesModel);
const validator = require('../middleware/validator.js');

router.get('/clothes', getClothes);
router.get('/clothes/:id', validator, getClothesById);
router.post('/clothes', createClothes);
router.put('/clothes/:id', validator, updateClothes);
router.delete('/clothes/:id', validator, deleteClothes);

async function getClothes(request, response, next){
  
  let clothesObj = await clothes.read();
  response.json(clothesObj);
}

async function getClothesById(request, response, next){
  try{
    const id = (request.params.id);
    let clothesObj = await clothes.read(id);
    //   response.json(clothesObj);
    response.json(clothesObj[0]);
  }catch(error){
    next('Invalid ID !');
  }
}

async function createClothes(request, response, next) {
  
  const clothesObj = request.body;
  let resObject = await clothes.create(clothesObj);
  response.json(resObject);
}

async function updateClothes(request, response, next){
  const id = (request.params.id);
  const foodBody = request.body;
  let clothesObj = await clothes.update(id, foodBody);
  // console.log(clothesObj);
  response.json(clothesObj);

}

async function deleteClothes(request, response, next){
  const id = parseInt(request.params.id);
  let clothesObj = await clothes.delete(id);
  response.status(204).json(clothesObj);

}

module.exports = router;