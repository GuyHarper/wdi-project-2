const List = require('../models/list');

function listsIndex(req, res) {
  List
    .find()
    .exec()
    .then(lists => res.render('lists/index', { lists }))
    .catch(err => res.render('error', { err }));
}

function listsShow(req, res) {
  List
    .findById(req.params.id)
    .exec()
    .then(list => res.render('lists/show', { list }))
    .catch(err => res.render('error', { err }));
}

function listsEdit(req, res) {
  List
    .findById(req.params.id)
    .exec()
    .then(list => res.render('lists/edit', { list }))
    .catch(err => res.render('error', { err }));
}

function listsUpdate(req, res) {
  List
    .findById(req.params.id)
    .exec()
    .then(list => {
      list = Object.assign( list, req.body);
      return list.save();
    })
    .then(list => res.redirect(`/lists/${list.id}`))
    .catch(err => res.render('error', { err }));
}

function listsNew(req, res) {
  res.render('lists/new');
}

function listsCreate(req, res) {
  List
    .create(req.body)
    .then(() => res.redirect('/lists'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: listsIndex,
  show: listsShow,
  edit: listsEdit,
  update: listsUpdate,
  new: listsNew,
  create: listsCreate
};
