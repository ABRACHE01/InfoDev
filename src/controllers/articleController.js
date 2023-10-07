
import Article from  '../models/Article.js' ;


 class ArticleController {


    async index(req , res ){

        const articleModel = new Article();
        const articles = await articleModel.getAllArticles();
        res.render('article/index' , {articles}) 
    }
    
    async show(req, res) {
        const articleModel = new Article();
        const { id } = req.params; 
        const articleId = parseInt(id, 10);
        const article = await articleModel.getArticleById(articleId);
        res.render('article/show', { article });

      }

      async submitAdd(req, res){

        const data = req.body; 
        const authorId = parseInt(req.body.authorId, 10);

        const articleModel = new Article();

        try {
          const newArticle = await articleModel.addArticle({ ...data , authorId  });
          res.redirect('/articles' );
          // res.render('article/success', { message: 'Article created successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }
      
      async deleteArticle(req, res) {
        const { id } = req.params; 
        const articleModel = new Article();
        try {
          await articleModel.deleteArticle(id);
      
          res.redirect('/articles');
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }

}

export { ArticleController }


