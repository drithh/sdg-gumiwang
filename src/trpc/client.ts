"use client";

import { getUrl, transformer } from "./shared";
import { experimental_createTRPCNextAppDirClient } from "@trpc/next/app-dir/client";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { type AppRouter } from "~/server/root";

export const api = experimental_createTRPCNextAppDirClient<AppRouter>({
  config() {
    return {
      transformer,
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchLink({
          url: getUrl(),
          headers() {
            return {
              "x-trpc-source": "client",
            };
          },
        }),
      ],
    };
  },
});

/** Export type helpers */
export type * from "./shared";
