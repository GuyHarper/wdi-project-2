const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.render('error', { err: 'Invalid credentials'});
      }
      res.redirect('/');
    });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate
};
