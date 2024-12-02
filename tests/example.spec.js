// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify GET Single User', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  // Verify status code is 200
  expect(response.status()).toBe(200);
  // Verify data type of body response is correct
  const body = await response.json();
  expect(typeof body.data.id).toBe('number');
  expect(typeof body.data.email).toBe('string');
  expect(typeof body.data.first_name).toBe('string');
  expect(typeof body.data.last_name).toBe('string');
  expect(typeof body.data.avatar).toBe('string');
});

test('Verify GET Single User Not Found', async ({request}) => {
  const response = await request.get('https://reqres.in/api/users/23');
  // Verify status code is 404
  expect(response.status()).toBe(404);
});

test('Verify successfully register', async ({request}) => {
  const email = "eve.holt@reqres.in";
  const password = "pistol123";
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      email: email,
      password: password
    }
  });
  // Verify status code is 201
  expect(response.status()).toBe(201);
  // Verify data register is correct
  const body = await response.json();
  expect(body.email).toEqual(email);
  expect(body.password).toEqual(password);
  expect(typeof body.id).toBe('string');
  expect(typeof body.createdAt).toBe('string');
  
});

test('Verify successfully create', async ({request}) => {
  const name = "morpheus";
  const job = "leader";
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: name,
      job: job
    }
  });
  // Verify status code is 201
  expect(response.status()).toBe(201);
  // Verify data creation is correct
  const body = await response.json();
  expect(body.name).toEqual(name);
  expect(body.job).toEqual(job);
  expect(typeof body.id).toBe('string');
  expect(typeof body.createdAt).toBe('string');
  
});
