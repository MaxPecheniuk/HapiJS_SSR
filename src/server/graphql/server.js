import { ApolloServer } from 'apollo-server/dist/index';
import { typeDefs } from './schema/postsSchema';
import resolvers from './resolvers/rootResolver';
import { createStore } from 'redux';
import rootReducer from '../../universal/reducer/roote.reducer';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
export const store = createStore(rootReducer);

server.listen().then(({ url }) => {
  // eslint-disable-next-line
  console.log(`Server ready at ${url}`);
});
