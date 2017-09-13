const User = require('../models/user');
const List = require('../models/list');

function registrationsNew(req, res) {
  res.render('registrations/new');
}

function registrationsCreate(req, res) {
  User
    .create(req.body)
    .then((user) => {
      if(req.session.listId) {
        List
          .findById(req.session.listId)
          .exec()
          .then(list => {
            if(list.entries.length > 0) {
              list.author = user;
              list.contributors = [user];
              return list.save();
            }
          })
          .catch(err => res.render('error', { err }));
      }
    })
    .then(() => res.redirect('/login'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  create: registrationsCreate,
  new: registrationsNew
};
