import { makeExecutableSchema, } from 'graphql-tools';
import resolvers from '../rootResolver';
import { typeDefs } from '../../schema/postsSchema';
import { graphql } from 'graphql';

const mock = {
  data: {
    'comments': [
      {
        'id': 'p1_c1',
        'text': 'Post 1 comment 1'
      },
      {
        'id': 'p1_c2',
        'text': 'Post 1 comment 2'
      },
      {
        'id': 'p1_c3',
        'text': 'Post 1 comment 3'
      },
      {
        'id': 'p2_c1',
        'text': 'Post 2 comment 1'
      },
      {
        'id': 'p2_c2',
        'text': 'Post 2 comment 2'
      },
      {
        'id': 'p2_c3',
        'text': 'Post 2 comment 3'
      },
      {
        'id': 'p3_c1',
        'text': 'Post 3 comment 1'
      },
      {
        'id': 'p3_c2',
        'text': 'Post 3 comment 2'
      },
      {
        'id': 'p3_c3',
        'text': 'Post 3 comment 3'
      }
    ]
  }
}



describe('post resolver', () => {
  let result;
  let schema;
  beforeEach(async () => {
    schema = makeExecutableSchema({typeDefs, resolvers});
  })

  const rootQuery = `
  {
    comments {
      id
      text
      }
  }`;
  const childQuery = `
  {
    posts {
      comments{
        id
        text
        author{id}
  }
  }
  }`;


  it('should rootQuery response equal mock data', async () => {
    result = await graphql(schema, rootQuery, null, {});
    expect(result).toEqual(mock)
  });

  it('should child query response equal mock data', async () => {
    const result = await graphql(schema, childQuery, null, {});
    result.data.posts.forEach((item) => {
      item.postComments.forEach(comment => {
          expect(comment).toHaveProperty('id');
        expect(comment).toHaveProperty('author');
        }
      )
    })
  });
})
