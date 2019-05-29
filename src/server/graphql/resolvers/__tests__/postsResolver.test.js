import {makeExecutableSchema,} from 'graphql-tools';
import resolvers from '../rootResolver';
import {typeDefs} from '../../schema/postsSchema';
import {graphql} from 'graphql';

const mock = {
  data: {
    'posts':
      [
        {
          'id': "p1",
          'title': {
            'en': "ENG Post 1 Title 1Post 1 Title 1Post 1 Title 1",
          }
        },
        {
          'id': 'p2',
          'title': {
            'en': "ENG Post 2 Title 2 Post 2 Title 2 Post 2 Title 2",
          }

        },
        {
          'id': 'p3',
          'title': {
            'en': "ENG Post 3 Title 3 Post 3 Title 3 Post 3 Title 3 ",
          }
        }
      ]
  }
}

describe('post resolver', () => {
  const schema = makeExecutableSchema({typeDefs, resolvers});
  const query = `
  {
    posts {
      id
      title{
      en
      }
      }
  }`;

  it('should response equal mock data', async () => {
    const result = await graphql(schema, query, null, {});
    expect(result).toEqual(mock)
  });
})