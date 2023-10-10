
import Article from  '../models/Article.js' ;
import path from 'path';
import fs from 'fs/promises';

 class ArticleController {


    async index(req , res ){

        const articleModel = new Article();

        try {

        const articles = await articleModel.getAllArticles();
        res.render('article/index' , {articles}) 

        }catch(error){
          throw error;
        }
    }
    
    async show(req, res) {

        const articleModel = new Article();
        const { id } = req.params; 

        try {

        const articleId = parseInt(id, 10);
        const article = await articleModel.getArticleById(articleId);
        res.render('article/show', { article });

        }catch(error){
          throw error;
        }

      }

      async submitAdd(req, res) {
        const data = req.body;
        const authorId = parseInt(req.body.authorId, 10);
      
        const photo = req.file ? req.file.filename : null;
      
        const articleModel = new Article();
      
        try {
          const newArticle = await articleModel.addArticle({ ...data, authorId, photo });
          res.redirect('/articles');
        } catch (error) {
          throw error;
        }
      }
      
  
      async deleteArticle(req, res) {
        const { id } = req.params;
        const articleModel = new Article();
    
        try {
          // Get the root directory of your project
          const rootDir = process.cwd();
    
          // Retrieve the article by ID to get the associated photo filename
          const article = await articleModel.getArticleById(parseInt(id, 10));
    
          if (!article) {
            return res.status(404).json({ message: 'Article not found' });
          }
    
          // Delete the associated image file using the filename from the article
          if (article.photo) {
            const imagePath = path.join(rootDir, 'public/uploads', article.photo);
            await fs.unlink(imagePath);
          }
    
          // Delete the article record from the database
          await articleModel.deleteArticle(parseInt(id, 10));
    
          res.redirect('/articles');
        } catch (error) {
          throw error;
        }
      }

      async showBeforeUpdate(req, res) {

        const articleModel = new Article();
        const { id } = req.params; 

        try {

        const articleId = parseInt(id, 10);
        const article = await articleModel.getArticleById(articleId);
        res.render('article/editeArticle', { article });

        }catch(error){
          throw error;
        }

      }

      async updateArticle(req, res) {
        const articleModel = new Article();
        const data = req.body;
        const authorId = parseInt(req.body.authorId, 10);
        const { id } = req.params;
        const articleId = parseInt(id, 10);
    
        try {
            const photo = req.file ? req.file.filename : null;
    
    
            const updatedData = {
                ...data,
                authorId,
                articleId,
                photo: photo , 
            };
    
            await articleModel.updateArticle(updatedData);
            res.redirect('/articles');
        } catch (error) {
            throw error;
        }
    }
    

}

export { ArticleController }


