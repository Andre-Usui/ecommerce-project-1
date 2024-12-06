const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const BCRYPT_SALT = +process.env.BCRYPT_SALT;


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }

);
// creating a Method to a Schema
//validate password match

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//register password hash

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(BCRYPT_SALT);
  this.password = await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model('User', userSchema);