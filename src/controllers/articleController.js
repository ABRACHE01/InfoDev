
import Article from  '../models/Article.js' ;
import path from 'path';
import fs from 'fs/promises';
import validation from '../requests/requestArticle.js';

 class ArticleController {

    async index(req , res ){

        const articleModel = new Article();

        try {

        const articles = await articleModel.getAllArticles();
        res.render('article/index' , {articles, req}) 

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
        res.render('article/show', { article, req });

        }catch(error){
          throw error;
        }

      }

      async submitAdd(req, res) {

        let check = validation.validateInpute(req)

        if(check.error){

          return res.status(400).render("article/addArticle", {
            'error': "please fill all the inputs",
            req
          })

        }

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
          const rootDir = process.cwd();
    
          const article = await articleModel.getArticleById(parseInt(id, 10));
    
          if (!article) {
            return res.status(404).json({ message: 'Article not found' });
          }
    
          if (article.photo) {
            const imagePath = path.join(rootDir, 'public/uploads', article.photo);
            await fs.unlink(imagePath);
          }
    
          await articleModel.deleteArticle(parseInt(id, 10));
    
          res.redirect('/dashboard');
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
        res.render('article/editeArticle', { article, req });

        }catch(error){
          throw error;
        }

      }

      async updateArticle(req, res) {

        let check = validation.validateInpute(req)

        if(check.error){

          return res.status(400).render("article/editeArticle", {
            'error': "please fill all the inputs",
            req
          })

        }
        const articleModel = new Article();
        const data = req.body;
        const authorId = parseInt(req.body.authorId, 10);
        const { id } = req.params;
        const articleId = parseInt(id, 10);
    
        try {
            const photo = req.file && req.file.filename ;
    
    
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

    async dashboard(req , res ){
      const articleModel = new Article();
      const articles = await articleModel.getAuthArticles(req, res)
      return res.render("article/dashboard",{
        articles,
        req
      })
    }
    

}

export { ArticleController }


