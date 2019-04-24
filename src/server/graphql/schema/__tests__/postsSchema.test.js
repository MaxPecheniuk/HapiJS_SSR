// // import te from 'fs'
// import { graphql } from 'graphql'
// import {
//   makeExecutableSchema,
//
// } from 'graphql-tools';
// import resolvers from '../../resolvers/rootResolver';
// import { typeDefs } from '../postsSchema';
//
// const expected = {
//
//   data: {
//     posts: [
//       {title: 'Post 1'},
//       {title: 'Post 2'},
//       {title: 'Post 3'},
//
//     ]
//   }
// }
//
// describe('Schema test', () => {
//
//   const schema = makeExecutableSchema({typeDefs, resolvers});
//   const query = `
//   {
//     posts {
//       title
//       }
//     }
// `
//
//   it('posts query', async () => {
//     const result = graphql(schema, query);
//     expect(result).toEqual(expected)
//   })
//
// })

describe('dd', ()=>{
  it('should ', () =>{
    const a = 1;
    const b =1;
    expect(a).toEqual(b)
  });
})
