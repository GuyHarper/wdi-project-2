const router = require('express').Router();
const lists = require('../controllers/lists');

router.get('/', (req, res) => res.render('home'));

router.route('/lists')
  .get(lists.index)
  .post(lists.create);

router.get('/lists/new', lists.new);

router.route('/lists/:id')
  .get(lists.show)
  .put(lists.update);

router.get('/lists/:id/edit', lists.edit);

module.exports = router;
