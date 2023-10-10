import Comment from "../models/Comment.js";

class CommentController {


  async createComment(req, res) {
    const { content, publishDate, authorId, articleId } = req.body;

    const authorIdAsInt = parseInt(authorId, 10);
    const articleIdAsInt = parseInt(articleId, 10);

    if (!content || !authorId || !articleId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const comment = await Comment.create({
        content,
        publishDate,
        author: { connect: { id: authorIdAsInt } },
        article: { connect: { id: articleIdAsInt } },
      });
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

  async deleteComment(req, res) {
    const commentId = parseInt(req.params.commentId, 10); // Parse commentId as an integer

  try {
    await Comment.deleteComment(commentId);
    console.log(`Deleted comment with ID ${commentId}`);
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).send('Internal Server Error');
  }
  }

  async updateComent(req, res) {
    const {commentId} = req.params;
    const commentIdAsInt = parseInt(commentId, 10);
    const {content} = req.body;

    if(isNaN(commentIdAsInt) || !content) {
      return res.status(400).json({ error: 'Invalid commentId or missing content' });
    }
    
    try {
      const updatedComment = await Comment.update(commentIdAsInt, {content});
      if (updatedComment) {
        res.json({ message: 'Comment updated successfully' });
      } else {
        res.status(404).json({ error: 'Comment not found' });
      }
    } catch (error) {
      console.error('Error updating comment:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new CommentController();