const bcrypt = require('bcryptjs');

// Usuário simulado no "banco de dados"
const users = [
  {
    id: 1,
    email: 'admin@example.com',
    senha_hash: bcrypt.hashSync('123456', 10)
  }
];

function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

module.exports = { findUserByEmail };
