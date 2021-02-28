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

function getClothes(request, response, next){
  
  let clothesObj = clothes.read();
  response.json(clothesObj);
}

function getClothesById(request, response, next){
  
  const id = parseInt(request.params.id);
  let clothesObj = clothes.read(id);
  //   response.json(clothesObj);
  response.json(clothesObj);
}

function createClothes(request, response, next) {
  
  const clothesObj = request.body;
  let resObject = clothes.create(clothesObj);
  response.json(resObject);
}

function updateClothes(request, response, next){
  const id = parseInt(request.params.id);
  const foodBody = request.body;
  let clothesObj = clothes.update(id, foodBody);
  // console.log(clothesObj);
  response.json(clothesObj);

}

function deleteClothes(request, response, next){
  const id = parseInt(request.params.id);
  let clothesObj = clothes.delete(id);
  response.json(clothesObj);

}

module.exports = router;