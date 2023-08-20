import { rumahTanggaRouter } from "./routers/rumah-tangga";
import { individuRouter } from "./routers/individu";
import { createTRPCRouter } from "~/server/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  rumahTangga: rumahTanggaRouter,
  individu: individuRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
