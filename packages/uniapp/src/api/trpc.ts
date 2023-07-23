import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '!!/trpc/index';
// @ts-ignore
import { fetch as uniFetch } from 'uni-fetch';
import { FetchEsque } from '@trpc/client/dist/internals/types';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3001',
      fetch: uniFetch as FetchEsque,
    }),
  ],
});
