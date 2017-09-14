const User = require('../models/user');
const List = require('../models/list');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Invalid credentials');
        return res.redirect('/login');
      }
      req.session.userId = user.id;
      res.redirect('/lists');
    });
}

function sessionsStart(req, res) {
  if(!req.session.listId) {
    List
      .create({
        name: '',
        entries: []
      })
      .then(list => {
        req.session.listId = list.id;
        res.redirect(`/lists/${list.id}`);
      })
      .catch(err => res.render('error', { err }));
  }
}

function sessionsDelete(req, res) {
  req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete,
  start: sessionsStart
};
