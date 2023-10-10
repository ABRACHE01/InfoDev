
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default class Article {


    async getAllArticles(){
      try{
        return await prisma.article.findMany({
          include: {
            author: true,
            comments: { // Include comments related to this article
              
            },
          },
          orderBy: {
            publishDate: 'desc', 
          },
        });
      }catch(error){
        throw error;
      }
    }

   async getArticleById(id){
    try{
    return await prisma.article.findUnique({
      where : {id}, 
      include : {
        author : true,
      }
    })
  }catch(error){
    throw error;
  }
   }

  
   async addArticle(data) {
    try {
      const newArticle = await prisma.article.create({
        data: {
          ...data,
          photo: data.photo || null, 
        },
      });
      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  async deleteArticle(id){
    try {
      return await prisma.article.delete({
        where : {id}, 
      });
       
    } catch (error) {
      throw error;
    }  
  }


  async updateArticle(data) {
    const { articleId, ...rest } = data;
  
    try {
      return await prisma.article.update({
        where: { id: articleId },
        data: {
          ...rest,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  
}






