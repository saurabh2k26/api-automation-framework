import { UserSchema } from '../model/user';

export function validateUser(user: any) {
  UserSchema.parse(user);
}