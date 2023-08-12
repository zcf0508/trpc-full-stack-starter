import { router } from './trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { userController } from '@/api/user';

const appRouter = router({
  ...userController,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
  middleware: process.env.production ? undefined : cors(),
});

server.listen(3001);
