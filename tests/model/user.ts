import { z } from 'zod';

export const UserSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    email: z.string(),
  }).strict();

export type User = z.infer<typeof UserSchema>;