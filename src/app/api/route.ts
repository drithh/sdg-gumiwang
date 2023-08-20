import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { env } from "~/env.mjs";
import { appRouter } from "~/server/root";
import { createTRPCContext } from "~/server/trpc";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/",
    req,
    router: appRouter,
    createContext: createTRPCContext,
    // onError:
    //   env.NODE_ENV === "development"
    //     ? ({ path, error }) => {
    //         console.error(
    //           `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
    //         );
    //       }
    //     : undefined,
  });

export { handler as GET, handler as POST };
