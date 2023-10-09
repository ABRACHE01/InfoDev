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

    update: async (commentId, data) => {
      try {
        return prisma.comment.update({
          where: {
            id: commentId,
          },
          data,
        });
      } catch (error) {
        throw new Error('Error updating comment');
      }
    }
}

export default Comment;
