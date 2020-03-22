const db = require("../database/dbConfig.js");
const bcrypt = require("bcryptjs");

module.exports = {
  add,
  find,
  findFinance,
  findResources,
  findBy,
  findById,
  remove
};

function find() {
  return db("users");
}

function findFinance() {
  return db("users").where("department", "finance" || "resources");
}

function findResources() {
  return db("users").where("department", "resources");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 10);
  const [id] = await db("users").insert(user);
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
