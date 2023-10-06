const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const Comment = {
    create: async (data) => {
        return prisma.comment.create({
            data,
        })
    }
}

module.exports = Comment;


