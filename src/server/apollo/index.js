const { ApolloServer } = require('apollo-server/dist/index');
const typeDefs = require('./schema/listSchema');
const ListAPI = require('./datasources/list');
const resolvers = require('./resolvers/resolver');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    listAPI: new ListAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});