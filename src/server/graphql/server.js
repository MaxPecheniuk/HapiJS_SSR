import { ApolloServer } from 'apollo-server/dist/index';
import { typeDefs } from './schema/postsSchema';
import resolvers from './resolvers/rootResolver';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`Server ready at ${url}`);
});
