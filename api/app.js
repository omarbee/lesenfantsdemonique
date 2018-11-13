const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const tokenChecker = require('./functions/tokenChecker');
const url = require('url');
const config = require('./configs/config');
const configDB = require('./configs/dbConfig');

const mongoDB = configDB.connectionString;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', function(req, res, next) {
    if (url.parse(req.originalUrl).path == '/login') {
        next();
    } else {
        tokenChecker(req, res, next);
    }
});

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/user', usersRouter);

module.exports = app;
