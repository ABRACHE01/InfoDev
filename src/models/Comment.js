import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Comment = {
    create: async (data) => {
        return prisma.comment.create({
            data,
        })
    }
}

export default Comment;
