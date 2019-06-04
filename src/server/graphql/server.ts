import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/postsSchema';
import resolvers from './resolvers/rootResolver';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  // tslint:disable-line
  console.log(`Server ready at ${url}`);
});
