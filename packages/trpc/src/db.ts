export type User = { id: string; name: string };

// Imaginary database
const users: User[] = [];
export const db = {
  user: {
    findMany: async () => new Promise<User[]>((resolve) => {
      resolve(users);
    }),
    findById: async (id: string) => new Promise<User | undefined>((resolve) => {
      resolve(users.find((user) => user.id === id));
    }),
    create: async (data: { name: string }) =>new Promise<User>((resolve) => {
      const user = { id: String(users.length + 1), ...data };
      users.push(user);
      resolve(user);
    }),
  },
};
