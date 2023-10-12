
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default class Article {




    async getAllArticles(){
      try{
        return await prisma.article.findMany({
          include : {
            author : true,
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

   async getAuthArticles(req, res){
    
    try {

      const articles = await prisma.article.findMany({

        select : {
          id : true , 
          title : true ,
          content : true ,
          photo: true ,
          publishDate:true ,
          updatedAt:true ,  
          author : true,  
        },
        where:{
          authorId : parseInt(req.cookies.user_id)
        }

      })
      return articles ;
    }catch(error){

      throw error

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
    const { articleId, photo , ...rest } = data;

    try {
      return await prisma.article.update({
        where: { id: articleId },
        data: {
          ...rest,
          photo: photo ,
        },
        
      });
    } catch (error) {
      throw error;
    }
  }
 
  
}






