const users = [
  {
    username: 'admin',
    password: 'admin',
    email: 'admin@test.com',
    name: 'Jean-Pierre Admin',
  },
  {
    username: 'moderator',
    password: 'moderator',
    email: 'moderator@test.com',
    name: 'Jean-Michel Modo',
  },
  {
    username: 'user',
    password: 'user',
    email: 'user@test.com',
    name: 'Jean-Marie Youzeur',
  },
];

export default (username, password) => new Promise( (resolve, reject) => {
  for (const user of users) {
    if (user.username === username && user.password === password) {
      resolve(user);
    }
  }
  reject({ message: 'Invalid credentials' });
})
