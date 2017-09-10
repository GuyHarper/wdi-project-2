const router = require('express').Router();
const lists = require('../controllers/lists');

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

module.exports = router;
