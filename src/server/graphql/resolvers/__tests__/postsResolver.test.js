import { makeExecutableSchema, } from 'graphql-tools';
import resolvers from '../rootResolver';
import { typeDefs } from '../../schema/postsSchema';
import { graphql } from 'graphql';

const mock = {
  data: {"posts": [{"id": "p1", "title": "Post 1"}, {"id": "p2", "title": "Post 2"}, {"id": "p3", "title": "Post 3"}]}
}

describe('post resolver', () => {
  const schema = makeExecutableSchema({typeDefs, resolvers});
  const query = `
  {
    posts {
      id
      title
      }
  }`;

  it('should response equal mock data', async () => {
    const result = await graphql(schema, query,null, {});
    expect(result).toEqual(mock)
  });
})