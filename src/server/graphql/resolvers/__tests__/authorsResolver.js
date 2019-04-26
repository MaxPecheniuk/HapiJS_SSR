import { makeExecutableSchema, } from 'graphql-tools';
import resolvers from '../rootResolver';
import { typeDefs } from '../../schema/postsSchema';
import { graphql } from 'graphql';

const mock = {
  data: {"authors": [
      {
        "id": "p1_c1_a",
        "name": "Post 1 comment 1 authorName"
      },
      {
        "id": "p1_c2_a",
        "name": "Post 1 comment 2 authorName"
      },
      {
        "id": "p1_c3_a",
        "name": "Post 1 comment 3 authorName"
      },
      {
        "id": "p2_c1_a",
        "name": "Post 2 comment 1 authorName"
      },
      {
        "id": "p2_c2_a",
        "name": "Post 2 comment 2 authorName"
      },
      {
        "id": "p2_c3_a",
        "name": "Post 2 comment 3 authorName"
      },
      {
        "id": "p3_c1_a",
        "name": "Post 3 comment 1 authorName"
      },
      {
        "id": "p3_c2_a",
        "name": "Post 3 comment 2 authorName"
      },
      {
        "id": "p3_c3_a",
        "name": "Post 3 comment 3 authorName"
      }
    ]}
}

describe('post resolver', () => {
  const schema = makeExecutableSchema({typeDefs, resolvers});
  const query = `
  {
    authors {
      id
      name
      }
  }`;

  it('should response equal mock data', async () => {
    const result = await graphql(schema, query,null, {});
    expect(result).toEqual(mock)
  });
})

