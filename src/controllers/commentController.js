const Comment = require('../models/Comment');

const commentController = {
  createComment: async (req, res) => {
    const { content, publishDatetId, authorId, articleId } = req.body;

    try {
      const comment = await Comment.create({ content, publishDatetId, authorId, articleId });
      res.json(comment);
        } catch (error) {
            res.status(500).json({ error: 'Internel Server Error' });
        }
    },
};

module.exports = commentController;