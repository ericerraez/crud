import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.login.upsert({
    where: { name: 'User' },
    update: {},
    create: {
      name: 'Juan',
      lastname: 'Correa',
      countLastSee: 12,
    },
  });

  const post2 = await prisma.login.upsert({
    where: { name: 'Rodrigo' },
    update: {},
    create: {
      name: 'Rodrigo',
      lastname: 'Ochoa',
      countLastSee: 12,
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });