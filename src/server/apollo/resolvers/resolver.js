module.exports = {
  Query: {
    // parent, args, context, info
    list: async (_, __, {dataSources}) =>
      dataSources.listAPI.getList(),
  },
  Mutation:{
    createPost: async (_,title,{dataSources}) => {
      dataSources.listAPI.createPost(title)
    }
  }
};