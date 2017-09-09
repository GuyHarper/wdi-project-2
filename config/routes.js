const router = require('express').Router();
const lists = require('../controllers/lists');

router.get('/', (req, res) => res.render('home'));

router.get('/lists', lists.index);

module.exports = router;
