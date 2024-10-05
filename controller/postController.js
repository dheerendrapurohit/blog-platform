const prisma = require('@prisma/client');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: false,
        authorId: req.userId, // Assume JWT middleware has populated this
      },
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};
