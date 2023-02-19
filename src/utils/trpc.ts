import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '@/backend/procedures/_app';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') { return ''; }

  if (process.env.VERCEL_URL) { return `https://${process.env.VERCEL_URL}`; }

  if (process.env.RENDER_INTERNAL_HOSTNAME) { return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`; }

  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default createTRPCNext<AppRouter>({
  config({ ctx }) {
    if (typeof window !== 'undefined') {
      // during client requests
      return {
        links: [
          httpBatchLink({
            url: '/api/trpc',
          }),
        ],
      };
    }
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          /**
           * Set custom request headers on every request from tRPC
           * @link https://trpc.io/docs/v10/header
           */
          headers() {
            if (ctx?.req) {
              const {
                connection,
                ...headers
              } = ctx.req.headers;
              return {
                ...headers,
                'x-ssr': '1',
              };
            }
            return {};
          },
        }),
      ],
    };
  },
  ssr: true,
});
