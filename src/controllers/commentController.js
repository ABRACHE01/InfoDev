const Comment = require('../models/Comment');

const commentController = {
  createComment: async (req, res) => {
    const { text, postId } = req.body;

    try {
      const comment = await Comment.create({ text, postId });
      res.json(comment);
        } catch (error) {
            res.status(500).json({ error: 'Internel Server Error' });
        }
    },
};

module.exports = commentController;