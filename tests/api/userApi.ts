import { APIRequestContext, APIResponse } from '@playwright/test';
import { User } from '../model/user';

export async function getUsers(apiContext: APIRequestContext): Promise<APIResponse> {
  return apiContext.get('/users');
}

export async function createUser(apiContext: APIRequestContext, user: User): Promise<APIResponse> {
  return apiContext.post('/users', { data: user });
}