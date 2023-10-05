// const {PrismaClient} = require('@prisma/client');
// const prisma = new PrismaClient();

// const Comment = {
//     create: async (data) => {
//         return prisma.comment.create({
//             data,
//         })
//     }
// }

// module.exports = Comment;


let mockData = [];

const Comment = {
  create: async (data) => {
    const newComment = { ...data, id: mockData.length + 1 };
    mockData.push(newComment);
    return newComment;
  },
};

console.log(mockData);

module.exports = Comment;