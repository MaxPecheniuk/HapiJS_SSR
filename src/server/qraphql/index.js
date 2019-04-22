const { ApolloServer } = require('apollo-server/dist/index');
const typeDefs = require('./schema/usersSchema');
const postloader = require('./loaders/postLoader');
const resolvers = require('./resolvers/rootResolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,

  // dataSources: () => ({
  //   UserListAPI: new UserListAPI()
  // })
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});