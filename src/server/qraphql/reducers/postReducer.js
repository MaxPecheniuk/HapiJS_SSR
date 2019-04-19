module.exports = {
  postReducer(post) {
    return {
      id: post.id,
      title: post.title,
      description: post.description,
      comments: post.comments
    }
  }
};

