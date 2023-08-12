import type { UserModel } from '@/model/user';
import { users } from '@/model/user';

export const userService = {
  findMany: async () => new Promise<UserModel[]>((resolve) => {
    resolve(users);
  }),
  findById: async (id: string) => new Promise<UserModel | undefined>((resolve) => {
    resolve(users.find((user) => user.id === id));
  }),
  create: async (data: { name: string }) =>new Promise<UserModel>((resolve) => {
    const user = { id: String(users.length + 1), ...data };
    users.push(user);
    resolve(user);
  }),
};
