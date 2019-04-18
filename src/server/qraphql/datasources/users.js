const {RESTDataSource} = require('apollo-datasource-rest/dist/index');
const {apiUrl, listUrl, apiUrl2} = require('../../config/apiConfig');

class ListAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = apiUrl2;
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

  async getUsers() {
    const response = await this.get('users');
    return Array.isArray(response)
      ? response.map(user => this.usersReducer(user))
      : [];
  }
  async deleteUser({id}) {
    await this.delete('users', {id});
    // return null
  }

  usersReducer(user) {
    return {
      id: user.id,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      image: user.image,
      role: user.role,
      phone: user.phone,
      is_confirmed: user.is_confirmed
    }
  }

  listReducer(post) {
    return {
      id: post.id,
      title: post.title,
      likes: {
        name: post.likes.name,
        avatar: post.likes.avatar,
      }
    }
  }
}

module.exports = ListAPI;