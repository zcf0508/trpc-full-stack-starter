import { trpc } from './trpc';

export function queryUserById(id: string) {
  return trpc.userById.query(id);
}

export function createUser(name: string) {
  return trpc.userCreate.mutate({ name });
}

export function getUserList() {
  return trpc.userList.query();
}
