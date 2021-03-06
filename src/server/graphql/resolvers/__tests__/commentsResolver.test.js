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
 query comments($id: [ID!]) {
		comments(id: $id){
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
    result = await graphql(schema, rootQuery, null, {}, {"id":["p1_c1", "p1_c2", "p1_c3"]});
    expect(result.data.comments).toEqual(mock.data.comments)
  });

  it('should child query response equal mock data', async () => {
    const result = await graphql(schema, childQuery, null, {});
    result.data.posts.forEach((item) => {
      item.comments.forEach(comment => {
          expect(comment).toHaveProperty('id');
        expect(comment).toHaveProperty('author');
        }
      )
    })
  });
})
