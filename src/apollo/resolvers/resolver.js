
module.exports = {
  Query: {
    //parent, age, context, info
    list: async (_, __, { dataSources }) =>
      dataSources.listAPI.getList(),
  },
};