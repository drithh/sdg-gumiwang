import { lucia } from "lucia";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { google, GoogleUser } from "@lucia-auth/oauth/providers";
import { nextjs } from "lucia/middleware";
import { env } from "~/env.mjs";
import { cache } from "react";
import { cookies } from "next/headers";
const client = new PrismaClient();

export const authentication = lucia({
  adapter: prisma(client, {
    user: "user", // model User {}
    key: "key", // model Key {}
    session: "session", // model Session {}
  }),
  env: env.NODE_ENV === "production" ? "PROD" : "DEV",
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  // transformDatabaseUser: (userData) => {
  //   return {
  //     userId: userData.id,
  //     id: userData.id,
  //     email: userData.email,
  //     emailVerified: userData.email_verified,
  //     name: userData.name,
  //     image: userData.image,
  //     activeTeamId: userData.active_team_id,
  //     createdAt: userData.created_at,
  //   };
  // },
  getUserAttributes: (data) => {
    return {
      email: data.email,
      name: data.name,
    };
  },
  sessionExpiresIn: {
    // While Lucia “works” with the new App router in Next.js v13,
    // your users will be signed out after 24 hours with the default configuration.
    // Currently, you cannot set cookies/headers inside page.tsx, and as such,
    // Lucia cannot store renewed sessions when a user revisits your site.
    // This can somewhat addressed by extending the session expiration with the
    // sessionExpiresIn.activePeriod configuration.
    activePeriod: 60 * 60 * 24 * 30, // 1 month
    idlePeriod: 0, // disable session renewal
  },
});

export const googleAuthentication = google(authentication, {
  clientId: env.GOOGLE_CLIENT_ID,
  clientSecret: env.GOOGLE_CLIENT_SECRET,
  redirectUri: env.GOOGLE_REDIRECT_URI,
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
});

export type Auth = typeof authentication;

export const getPageSession = cache(() => {
  const authRequest = authentication.handleRequest({
    request: null,
    cookies,
  });
  return authRequest.validate();
});
