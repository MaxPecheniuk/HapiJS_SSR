const {RESTDataSource} = require('apollo-datasource-rest');

class ListAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:9080/api/';
  }

  async getAllLaunches() {
    const response = await this.get('list');
    console.log(response);
    return Array.isArray(response)
      ? response.map(list => this.launchReducer(list))
      : [];
  }

  launchReducer(list) {
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