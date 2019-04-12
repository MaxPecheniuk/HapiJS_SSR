
module.exports = {
  Query: {
    list: async (_, __, { dataSources }) =>
      dataSources.listAPI.getAllLaunches(),
  },
};