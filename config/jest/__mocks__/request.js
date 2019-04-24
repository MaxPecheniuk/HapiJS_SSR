const posts = {
  posts: [
    {
      title: 'Post 1'
    },
    {
      title: 'Post 2'
    },
    {
      title: 'Post 3'
    },
  ]
}
 const request = (url) => {
   return new Promise((resolve, reject) => {
     const postsID = parseInt(url.substr('/posts/'.length), 10);
     process.nextTick(() =>
       users[userID]
         ? resolve(users[userID])
         : reject({
           error: 'User with ' + userID + ' not found.',
         }),
     );
   });
 }
 export default request;