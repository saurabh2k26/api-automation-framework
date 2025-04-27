import { request, APIRequestContext } from '@playwright/test';
import { API_BASE_URL, HEADERS } from '../config/envConfig';

export async function createApiContext(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: API_BASE_URL,
    extraHTTPHeaders: HEADERS,
  });
}