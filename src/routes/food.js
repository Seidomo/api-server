'use strict';

const express = require('express');
const router = express.Router();

const FoodInterface = require('../models/food-interface.js');
const FoodModel = require('../models/food-model.js');
const food = new FoodInterface(FoodModel);
const validator = require('../middleware/validator.js');


router.get('/food/:id', validator, getFoodById);
router.post('/food', createFood);
router.put('/food/:id', validator, updateFood);
router.delete('/food/:id', validator, deleteFood);



async function getFoodById(request, response, next){
  
  const id = request.params.id;
  let foodObj = await food.read(id);
  
  response.json(foodObj);
}

async function createFood(request, response, next) {
  
  const foodObj = request.body;
  let resObject =  await food.create(foodObj);
  response.json(resObject);
}

async function updateFood(request, response, next){
  const id = request.params.id;
  const foodBody = request.body;
  let foodObj =  await food.update(id, foodBody);
  console.log(foodObj);
  response.json(foodObj);

}

async function deleteFood(request, response, next){
  const id = request.params.id;
  let foodObj = await food.delete(id);
  response.status(204).json(foodObj);

}

module.exports = router;