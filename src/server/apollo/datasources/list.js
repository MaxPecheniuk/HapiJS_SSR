const {RESTDataSource} = require('apollo-datasource-rest/dist/index');
const {apiUrl, listUrl} = require('../../config/apiConfig');

class ListAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = apiUrl;
  }

  async getList() {
    const response = await this.get(listUrl);
    return Array.isArray(response)
      ? response.map(post => this.listReducer(post))
      : [];
  }

  async createPost(title) {
    return this.post(`${listUrl}`, title)
  }


  listReducer(post) {
    return {
      id: post.id,
      title: post.title,
      likes:
        {
          name: post.likes.name,
          avatar: post.likes.avatar,
        }
    };
  }
}

module.exports = ListAPI;