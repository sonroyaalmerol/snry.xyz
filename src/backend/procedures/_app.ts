import { router } from '@/backend/trpc';
import searchProcedure from '@/backend/procedures/search';

export const appRouter = router({
  search: searchProcedure,
});

// export type definition of API
export type AppRouter = typeof appRouter;
