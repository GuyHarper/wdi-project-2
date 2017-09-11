const router = require('express').Router();
const lists = require('../controllers/lists');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home'));

router.route('/lists')
  .get(lists.index)
  .post(lists.create);

router.get('/lists/new', lists.new);

router.route('/lists/:id')
  .get(lists.show)
  .put(lists.update)
  .delete(lists.delete);

router.get('/lists/:id/edit', lists.edit);

router.put('/lists/:id/entries', lists.entriesCreate);

router.route('/lists/:id/entries/:entryId')
  .delete(lists.entriesDelete)
  .put(lists.entriesUpdate);

router.put('/lists/:id/entries/:entryId/comments', lists.commentsCreate);

router.delete('/lists/:id/entries/:entryId/comments/:commentId', lists.commentsDelete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

module.exports = router;
