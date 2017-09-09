const express = require('express');
const app = express();
const { port, dbURI } = require('./config/environment');
const expressLayouts  = require('express-ejs-layouts');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
