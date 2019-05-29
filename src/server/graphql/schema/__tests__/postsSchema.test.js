// import te from 'fs'
import {graphql} from 'graphql'
import {makeExecutableSchema} from 'graphql-tools';
import resolvers from '../../resolvers/rootResolver';
import {typeDefs} from '../postsSchema';

const expected = {

  data: {
    posts: [
      {
        title: {
          en:  "ENG Post 1 Title 1Post 1 Title 1Post 1 Title 1"
        }
      },
      {
        title: {
          en:  "ENG Post 2 Title 2 Post 2 Title 2 Post 2 Title 2",


        }
      },
      {
        title: {
          en: "ENG Post 3 Title 3 Post 3 Title 3 Post 3 Title 3 ",

        }
      },

    ]
  }
}

describe('Schema test', () => {

  const schema = makeExecutableSchema({typeDefs, resolvers});
  const query = `
  {
    posts {
      title{
      en}
      }
    }
`

  it('posts query', async () => {
    const result = await graphql(schema, query, null, {});
    expect(result.data).toEqual(expected.data)
  })

})
