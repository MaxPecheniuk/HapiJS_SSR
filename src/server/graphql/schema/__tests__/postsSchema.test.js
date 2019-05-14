// import te from 'fs'
import { graphql } from 'graphql'
import {makeExecutableSchema} from 'graphql-tools';
import resolvers from '../../resolvers/rootResolver';
import { typeDefs } from '../postsSchema';

const expected = {

  data: {
    posts: [
      {title: "Post 1 Title 1Post 1 Title 1Post 1 Title 1"},
      {title: "Post 2 Title 2 Post 2 Title 2 Post 2 Title 2"},
      {title: "Post 3 Title 3 Post 3 Title 3 Post 3 Title 3 "},

    ]
  }
}

describe('Schema test', () => {

  const schema = makeExecutableSchema({typeDefs, resolvers});
  const query = `
  {
    posts {
      title
      }
    }
`

  it('posts query', async () => {
    const result = await graphql(schema, query, null, {});
    expect(result.data).toEqual(expected.data)
  })

})
