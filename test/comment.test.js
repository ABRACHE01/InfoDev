const { expect } = require('chai');
const Comment = require('../src/models/Comment');

// Load environment variables
require('dotenv').config();

// Set the environment variable for NODE_ENV to 'test'
process.env.NODE_ENV = 'test';

// Configure Prisma to use the test database
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.TEST_DATABASE_URL,
    },
  },
});

describe('Comment Model', () => {
  before(async () => {
    // Connect to the test database before running tests
    await prisma.$connect();
  });

  after(async () => {
    // Disconnect from the test database after running tests
    await prisma.$disconnect();
  });

  it('should create a new comment', async () => {
    const commentData = {
      content: 'nice article',
      publishDate: '01-06-2010',
      authorId: 1,
      articleId: 1,
    };

    const createdComment = await Comment.create(commentData);

    expect(createdComment).to.have.property('id');
    expect(createdComment.content).to.equal(commentData.content);
    expect(createdComment.publishDate).to.equal(commentData.publishDate);
    expect(createdComment.authorId).to.equal(commentData.authorId);
    expect(createdComment.articleId).to.equal(commentData.articleId);
    // Add more assertions as needed...
  });
});