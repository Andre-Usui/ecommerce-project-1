const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();
const BCRYPT_CODE = process.env.BCRYPT_CODE;
const BCRYPT_SALT = +process.env.BCRYPT_SALT;

const usersData = [
  {
    name: "Admin",
    email: "admin@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
  },
]

module.exports = usersData;