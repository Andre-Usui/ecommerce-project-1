const bcrypt = require('bcryptjs');

const BCRYPT_SALT = +process.env.BCRYPT_SALT;

const usersData = [
  {
    name: "Admin",
    email: "admin@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
    isAdmin: true,
  },
  { 
    name: "User2",
    email: "user2@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
  },
  { 
    name: "User3",
    email: "user3@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
  },
  { 
    name: "User4",
    email: "user4@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
  },
  { 
    name: "User5",
    email: "user5@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
  },
  { 
    name: "User6",
    email: "user6@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
  },
  { 
    name: "User7",
    email: "user7@node.com",
    password: bcrypt.hashSync("123456", BCRYPT_SALT),
  },
]

module.exports = usersData;