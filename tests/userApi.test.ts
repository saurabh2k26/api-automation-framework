import { test, expect, request } from '@playwright/test';
import { getUsers, createUser } from './api/userApi';
import { createApiContext } from './api/apiContext';
import { User } from './model/user';
import { validateUser } from './utils/validators';
import { createRandomUser } from './utils/userFactory';

test.describe('User API', () => {
    let apiContext;
  
    test.beforeAll(async () => {
      apiContext = await createApiContext();
    });

test('GET /users returns a list of users', async () => {
  const apiContext = await createApiContext();
  const response = await getUsers(apiContext);
  expect(response.ok()).toBeTruthy();
  const users: User[] = await response.json();
  expect(Array.isArray(users)).toBe(true);
  expect(users.length).toBeGreaterThan(0);
  expect(users[0]).toHaveProperty('name');
  //users.forEach(user => validateUser(user));
});

test('POST /users creates a new user', async () => {
    const newUser = createRandomUser();
    const response = await createUser(apiContext, newUser);
    expect(response.ok()).toBeTruthy();
    const createdUser = await response.json();
    expect(createdUser.name).toBe(newUser.name);
    expect(createdUser.email).toBe(newUser.email);
    validateUser(createdUser);
  });

});