import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '!!/trpc';


export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3001',
    }),
  ],
});
