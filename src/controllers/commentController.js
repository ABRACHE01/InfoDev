import Comment from '../models/Comment.js';

const commentController = {
  createComment: async (req, res) => {
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
    },
};

export default commentController;




