const router = require('express').Router();
const lists = require('../controllers/lists');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('home'));

router.get('/lists/my-first-list', sessions.start);

router.route('/lists')
  .get(lists.index)
  .post( secureRoute, lists.create );

router.route('/lists/new')
  .get( secureRoute, lists.new );

router.route('/lists/:id')
  .get(lists.show)
  .put(lists.update)
  .delete( secureRoute, lists.delete );

router.route('/lists/:id/edit')
  .get(lists.edit);

router.route('/lists/:id/entries')
  .put(lists.entriesCreate);

router.route('/lists/:id/entries/:entryId')
  .delete(lists.entriesDelete)
  .put(lists.entriesUpdate);

router.route('/lists/:id/entries/:entryId/comments')
  .put(lists.commentsCreate);

router.route('/lists/:id/entries/:entryId/comments/:commentId')
  .delete(lists.commentsDelete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.get('/logout', sessions.delete);

module.exports = router;
