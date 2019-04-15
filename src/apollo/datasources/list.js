const {RESTDataSource} = require('apollo-datasource-rest');
const {apiUrl, listUrl} = require('../../config/apiConfig');
class ListAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = apiUrl;
  }

  async getList() {
    const response = await this.get(listUrl);
    console.log(response);
    return Array.isArray(response)
      ? response.map(list => this.listReducer(list))
      : [];
  }
  async getLikes() {

  }

  listReducer(list) {
    return {
      title: list.title,
      likes:
        {
          name: list.likes.name,
          avatar: list.likes.avatar,
        }


    };
  }
}

module.exports = ListAPI;