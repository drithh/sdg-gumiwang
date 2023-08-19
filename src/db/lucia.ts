import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const auth = lucia({
  adapter: prisma(client, {
    user: 'user', // model User {}
    key: 'key', // model Key {}
    session: 'session', // model Session {}
  }),
  env: 'DEV',
});
