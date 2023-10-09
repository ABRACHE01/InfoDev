
import Article from  '../models/Article.js' ;


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
        const Id = parseInt(id, 10);
        const articleModel = new Article();
        try {

          console.log('been here ')
          await articleModel.deleteArticle(Id);
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

      async updateArticle(req , res ){
        const data = req.body;
        const authorId = parseInt(req.body.authorId, 10);
        const articleModel = new Article();
        const { id } = req.params; 
        const articleId = parseInt(id, 10);
        
        try {

        await articleModel.updateArticle({...data , authorId , articleId } )
        res.redirect('/articles' );

        }catch(error){
          throw error ;
        }
      }

}

export { ArticleController }


