const router = require('express').Router();
const lists = require('../controllers/lists');

router.get('/', (req, res) => res.render('home'));

router.get('/lists', lists.index);

router.get('/lists/:id', lists.show);

router.get('/lists/:id/edit', lists.edit);

module.exports = router;
