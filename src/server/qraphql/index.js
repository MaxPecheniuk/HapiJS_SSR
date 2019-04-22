const { ApolloServer } = require('apollo-server/dist/index');
const typeDefs = require('./schema/postsSchema');
const resolvers = require('./resolvers/rootResolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});