import { postsResolver } from '../postsResolver';
import { makeExecutableSchema,  } from 'graphql-tools';
import resolvers from '../rootResolver';
import { typeDefs } from '../../schema/postsSchema';
import { graphql } from 'graphql';



describe('post resolver', () => {
  const schema = makeExecutableSchema({typeDefs, resolvers});

  const query = `query posts{posts{title}}`;
  it('should response equile mock data', async () => {
    const result = await graphql(schema, query);
    // await
    console.log(result);
  });
})