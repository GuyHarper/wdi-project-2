const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  forename: String,
  surname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

module.exports = mongoose.model( 'User', userSchema );
