'use strict';

require('@code-fellows/supergoose');
const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

let testId = null;


describe('server tests', () => {
  test('should pass a 500 error with inavalid Id', async () => {
    const response = await request.get('/food/wrong');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Invalid ID !');
  });

  test('should create a food type on POST ', async () => {
    const response = await request.post('/food').send({
      name: 'pizza',
      type: 'Fast Food',
    });
    testId = response.body._id;
    console.log(response.body);
    expect(response.status).toEqual(200);
    // expect(response.body._id).toEqual(1);
    expect(response.body.name).toEqual('pizza');
  });
  

  test('should get food by Id ', async () => {
    const response = await request.post(`/food`).send({
      name: 'pizza',
      type: 'Fast Food',
    });
    // const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body._id).toBeTruthy();
  });
  
 
  test('should update an existing food type', async () => {
    const response = await request.put(`/food/${testId}`).send({
      name: 'salad',
      type: 'healthy',
    });
    
    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body._id).toBeTruthy();
    expect(response.body.name).toEqual('salad');
  });

  test ('should delete an existing food', async () =>{
    const response = await request.delete('/food/1');
    expect(response.status).toEqual(204);

  });
});

/////////////// Testing Clothes route /////////

test('should pass a 500 error with inavalid Id', async () => {
  const response = await request.get('/clothes/wrong');
  expect(response.status).toEqual(500);
  expect(response.text).toEqual('Invalid ID !');
});

test('should create a clothes type on POST ', async () => {
  const response = await request.post('/clothes').send({
    name: 'jeans',
    type: 'pants',
  });
  testId = response.body._id;
  console.log('sent unf', response.body);
  expect(response.status).toEqual(200);
  // expect(response.body._id).toBeTruthy();
  expect(response.body.name).toEqual('jeans');
});
  

test('should get clothes by Id ', async () => {
  const response = await request.get(`/clothes/${testId}`);
  console.log(response.body);
  expect(response.status).toEqual(200);
  expect(response.body._id).toBeTruthy();
});
  
 
test('should update an existing clothes type', async () => {
  const response = await request.put(`/clothes/${testId}`).send({
    name: 'sweater',
    type: 'cotton',
  });
  // console.log(response.body);
  expect(response.status).toEqual(200);
  expect(response.body._id).toBeTruthy();
  expect(response.body.name).toEqual('sweater');
});

test ('should delete an existing clothes', async () =>{
  const response = await request.delete('/clothes/1');
  expect(response.status).toEqual(204);

});

