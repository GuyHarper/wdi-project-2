const List = require('../models/list');
const User = require('../models/user');

function listsIndex(req, res) {
  if(!req.currentUser) {
    List
      .findById(req.session.listId)
      .exec()
      .then((list) => {
        res.redirect(`lists/${list.id}`);
      })
      .catch(err => res.render('error', { err }));
  } else {
    List
      .find({ contributors: req.currentUser })
      .exec()
      .then(lists => {
        res.render('lists/index', { lists });
      })
      .catch(err => res.render('error', { err }));
  }
}


function listsShow(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        res.render('lists/show', { list });
      }
      if(list.contributors.indexOf(req.currentUser.id) > -1) {
        res.render('lists/show', { list });
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .catch(err => res.render('error', { err }));
}

function listsEdit(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        res.render('lists/edit', { list });
      } else if(list.contributors.indexOf(req.currentUser.id) > -1) {
        res.render('lists/edit', { list });
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .catch(err => res.render('error', { err }));
}

function listsUpdate(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        list = Object.assign( list, req.body );
        return list.save();
      } else if(list.contributors.indexOf(req.currentUser.id) > -1) {
        list = Object.assign( list, req.body );
        return list.save();
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .then(list => res.redirect(`/lists/${list.id}`))
    .catch(err => res.render('error', { err }));
}

function listsNew(req, res) {
  res.render('lists/new');
}

function listsCreate(req, res) {
  req.body.author = req.currentUser;
  req.body.contributors = [req.currentUser];
  let latestCreated = null;
  List
    .create(req.body)
    .then(() => {
      List
        .find({ author: req.currentUser })
        .exec()
        .then(lists => {
          if(lists.length > 1) {
            lists.reduce(function(a, b) {
              if(!a) {
                a = b;
              }
              if(b.createdAt > a.createdAt) {
                a = b;
              }
              latestCreated = a;
            });
          } else {
            latestCreated = lists[0];
          }
        })
        .then(() => {
          res.redirect(`/lists/${latestCreated.id}`);
        })
        .catch(err => res.render('error', { err }));
    })
    .catch(err => res.render('error', { err }));
}

function listsDelete(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(list.contributors.indexOf(req.currentUser.id) > -1) {
        return list.remove();
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .then(() => res.redirect('/lists'))
    .catch(err => res.render('error', { err }));
}

function listsEntriesCreate(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        list.entries.push(req.body);
        return list.save();
      } else if(list.contributors.indexOf(req.currentUser.id) > -1) {
        list.entries.push(req.body);
        return list.save();
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .then(list => res.redirect(`/lists/${list.id}`))
    .catch(err => res.render('error', { err }));
}

function listsEntriesDelete(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        const entry = list.entries.id(req.params.entryId);
        entry.remove();
        return list.save();
      } else if(list.contributors.indexOf(req.currentUser.id) > -1) {
        const entry = list.entries.id(req.params.entryId);
        entry.remove();
        return list.save();
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .then(list => res.redirect(`/lists/${list.id}`))
    .catch(err => res.render('error', { err }));
}

function listsEntriesUpdate(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        let entry = list.entries.id(req.params.entryId);
        entry = Object.assign( entry, req.body );
        if(!req.body.active) {
          entry.active = false;
        }
        return list.save();
      } else if(list.contributors.indexOf(req.currentUser.id) > -1) {
        let entry = list.entries.id(req.params.entryId);
        entry = Object.assign( entry, req.body );
        if(!req.body.active) {
          entry.active = false;
        }
        return list.save();
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .then(list => res.redirect(`/lists/${list.id}`))
    .catch(err => res.render('error', { err }));
}

function entriesCommentsCreate(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        const entry = list.entries.id(req.params.entryId);
        entry.comments.push(req.body);
        return list.save();
      } else if(list.contributors.indexOf(req.currentUser.id) > -1) {
        const entry = list.entries.id(req.params.entryId);
        entry.comments.push(req.body);
        return list.save();
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .then(list => res.redirect(`/lists/${list.id}`))
    .catch(err => res.render('error', { err }));
}

function entriesCommentsDelete(req, res) {
  List
    .findById(req.params.id)
    .populate('author', 'contributors')
    .exec()
    .then(list => {
      if(!list.author && req.session.listId === list.id) {
        const entry = list.entries.id(req.params.entryId);
        const comment = entry.comments.id(req.params.commentId);
        comment.remove();
        return list.save();
      } else if(list.contributors.indexOf(req.currentUser.id) > -1) {
        const entry = list.entries.id(req.params.entryId);
        const comment = entry.comments.id(req.params.commentId);
        comment.remove();
        return list.save();
      } else {
        res.render('error', { err: 'This is not your list'});
      }
    })
    .then(list => res.redirect(`/lists/${list.id}`))
    .catch(err => res.render('error', { err }));
}

function listsShare(req, res) {
  List
    .findById(req.params.id)
    .populate('author','contributors')
    .exec()
    .then(list => {
      if(list.contributors.indexOf(req.currentUser.id) > -1) {
        User
          .findOne({ email: req.body.email })
          .exec()
          .then(user => {
            list.contributors.push(user);
            return list.save();
          })
          .catch(err => res.render('error', { err }));
      } else {
        res.render('error', { err: 'This is not your list'});
      }
      res.redirect(`/lists/${list.id}`);
    })
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: listsIndex,
  show: listsShow,
  edit: listsEdit,
  update: listsUpdate,
  new: listsNew,
  create: listsCreate,
  delete: listsDelete,
  entriesCreate: listsEntriesCreate,
  entriesDelete: listsEntriesDelete,
  entriesUpdate: listsEntriesUpdate,
  commentsCreate: entriesCommentsCreate,
  commentsDelete: entriesCommentsDelete,
  share: listsShare
};
