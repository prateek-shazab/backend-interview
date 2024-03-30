class UserService {
  constructor() {
    console.log('UserService');
  }

  async getUserList() {
    return [{ message: 'List of users' }];
  }
}

module.exports = UserService;
