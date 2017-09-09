const mongoose = require('mongoose');
const List = require('../models/list');
const dbURI = require('./config/environment');

mongoose.connect(dbURI, { useMongoClient: true });
mongoose.Promise = require('bluebird');
