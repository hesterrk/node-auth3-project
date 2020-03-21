const db = require('../database/dbConfig.js');
const bcrypt = require("bcryptjs")

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 10)
  const [id] = await db("users")
  .insert(user)
  return findById(id)
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
