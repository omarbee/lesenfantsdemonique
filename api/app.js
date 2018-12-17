const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const tokenChecker = require('./functions/tokenChecker');
const url = require('url');
const swaggerUi = require('express-swaggerize-ui');
const configDB = require('./configs/dbConfig');
const cors = require('cors');

const mongoDB = configDB.connectionString;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const contentsRouter = require('./routes/contents');
const donationRouter = require('./routes/donation');
const interventionsRouter = require('./routes/interventions');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const publicRoutes = ['/', '/login', '/api-docs/', '/api-docs.json'];

app.use('*', function(req, res, next) {
    console.log(url.parse(req.originalUrl).path);
    if (publicRoutes.includes(url.parse(req.originalUrl).path)) {
        next();
    } else {
        tokenChecker(req, res, next);
    }
});

app.use('/',indexRouter);
app.use('/api-docs', swaggerUi());
app.use('/api-docs.json', function(req, res) {
    res.json(require('./swagger.json'));
});
app.use('/login', loginRouter);
app.use('/user', usersRouter);
app.use('/content', contentsRouter);
app.use('/donation', donationRouter);
app.use('/intervention', interventionsRouter);


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-lem'));
  });

module.exports = app;
