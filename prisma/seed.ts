import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const main = async () => {
  const newFeedback = await prisma.feedback.createMany({
    data: [
      {
        name: 'Joe Gitonga',
        email: 'thekiharani@gmail.com',
        message:
          'Can you provide a way of excluding/hiding some columns from DB query?',
        feedbackType: 'ISSUE',
      },
      {
        name: 'Nora Gitonga',
        email: 'thenora@gmail.com',
        message: 'I am not a developer but I think Prisma is a life safer :(',
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect)
