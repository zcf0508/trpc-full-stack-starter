import { z } from 'zod';
import { userService } from '@/service/user';
import { publicProcedure } from '@/trpc';

export const userController = {
  userList: publicProcedure
    .query(async () => {
      // Retrieve users from a datasource, this is an imaginary database
      const users = await userService.findMany();

      return users;
    }),
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      // Retrieve the user with the given ID
      const user = await userService.findById(input);

      return user;
    }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      // Create a new user in the database
      const user = await userService.create(input);
      return user;
    }),
};
