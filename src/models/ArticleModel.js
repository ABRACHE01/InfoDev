
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


const Articles = await prisma.article.findMany()

console.log(Articles)