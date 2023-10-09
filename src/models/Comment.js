import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Comment = {
    create: async (data) => {
        return prisma.comment.create({
            data,
        })
    },

    findMany: async () => {
      return prisma.comment.findMany();
    },

    delete: async (commentId) => {
      return prisma.comment.delete({
        where: {
          id: commentId,
        },
      });
    },
}

export default Comment;
