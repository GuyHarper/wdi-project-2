const express = require('express');
const app = express();

const expressLayouts  = require('express-ejs-layouts');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');

const { port, dbURI, secret } = require('./config/environment');
const routes = require('./config/routes');


mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
})));
app.use(session({
  secret: secret,
  maxAge: 1572480000000, // 50 years!
  resave: false,
  saveUninitialized: false
}));
app.use((req, res, next) => {
  if(!req.session.userId) return next();
  const User = require('./models/user');
  User
    .findById(req.session.userId)
    .then(user => {
      res.locals.isAuthenticated = true;
      res.locals.currentUser = user;
      next();
    });
});

app.use(routes);



app.listen(port, () => console.log(`Express is listening on port ${port}`));
