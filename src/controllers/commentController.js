import Comment from "../models/Comment.js";

class CommentController {


  async createComment(req, res) {
    const { content, publishDate, authorId, articleId } = req.body;
    if (!content || !authorId || !articleId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const comment = await Comment.create({ content, publishDate, authorId, articleId });
      res.json(comment);
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getComments(req, res) {
    try {
      const comments = await Comment.findMany();
      res.json(comments);
    } catch (error) {
      console.log('Error retrieving comments:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new CommentController();