import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const Comment = {
  create: async (data) => {
    return prisma.comment.create({
      data: {
        ...data,
        publishDate: new Date(), 
      },
    });
  },


    findMany: async () => {
      return prisma.comment.findMany();
    },

    async deleteComment(id){
      try {
        return await prisma.comment.delete({
          where : {id}, 
        });
         
      } catch (error) {
        throw error;
      }  
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
    },
}

export default Comment;
