import { authentication, googleAuthentication } from "~/server/auth/lucia";
import { OAuthRequestError } from "@lucia-auth/oauth";
import { cookies } from "next/headers";

import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const authRequest = authentication.handleRequest({ request, cookies });
  const session = await authRequest.validate();
  if (session) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  }
  const cookieStore = cookies();
  const storedState = cookieStore.get("google_oauth_state")?.value;
  const url = new URL(request.url);
  const state = url.searchParams.get("state");
  const code = url.searchParams.get("code");
  // validate state
  if (!storedState || !state || storedState !== state || !code) {
    return new Response(null, {
      status: 400,
    });
  }
  try {
    const { existingUser, googleUser, createUser } =
      await googleAuthentication.validateCallback(code);
    const getUser = async () => {
      if (existingUser) return existingUser;
      const user = await createUser({
        attributes: {
          email: googleUser.email ?? "",
          name: googleUser.name ?? "",
        },
      });
      return user;
    };

    const user = await getUser();
    const session = await authentication.createSession({
      userId: user.userId,
      attributes: {},
    });
    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
};
