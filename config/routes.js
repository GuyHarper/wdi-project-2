const router = require('express').Router();
const lists = require('../controllers/lists');

router.get('/', (req, res) => res.render('home'));

router.get('/lists', lists.index);

router.get('/lists/:id', lists.show);

module.exports = router;
