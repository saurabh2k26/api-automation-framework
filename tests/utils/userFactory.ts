import { User } from '../model/user';

export function createRandomUser(): User {
  const random = Math.floor(Math.random() * 10000);
  return {
    name: `TestUser${random}`,
    email: `test${random}@example.com`,
  };
}