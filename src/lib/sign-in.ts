// import { eq } from 'drizzle-orm';
// import { LuciaError } from 'lucia';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

// export async function signIn(request: Request) {
//   const json = await request.json();
//   const { email, password } = authenticationSchema.parse(json);

//   try {
//     const authenticationRequest = authentication.handleRequest({
//       request,
//       cookies,
//     });
//     const key = await authentication.useKey('email', email, password);
//     const session = await authentication.createSession(key.userId);
//     authenticationRequest.setSession(session);

//     if (session) {
//       const { user } = await authenticationRequest.validateUser();

//       if (!user) {
//         return new Response(null, {
//           status: 302,
//           headers: {
//             location: '/',
//           },
//         });
//       }

//       // return new Response(null, {
//       //   status: 302,
//       //   headers: {
//       //     location: team ? `/${team.slug}/dashboard` : '/',
//       //   },
//       // });
//     }
//   } catch (error) {
//     if (
//       (error instanceof LuciaError &&
//         error.message === 'AUTH_INVALID_KEY_ID') ||
//       (error instanceof LuciaError && error.message === 'AUTH_INVALID_PASSWORD')
//     ) {
//       return NextResponse.json(
//         {
//           error: 'Incorrect username or email',
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     console.error(error);

//     return NextResponse.json(
//       {
//         error: 'Unknown error occurred',
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
