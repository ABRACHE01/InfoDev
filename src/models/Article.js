
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


export default class Article {


    async getAllArticles(){
        return await prisma.article.findMany({
          include : {
            author : true,
          }
        });
    }

   async getArticleById(id){
    return await prisma.article.findUnique({
      where : {id}, 
      include : {
        author : true,
      }
    })
   }

   async addArticle(data){
    try {
      const newArticle = await prisma.article.create({ data });
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
  
}






