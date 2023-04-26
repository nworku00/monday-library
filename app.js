var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);

var indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

//no longer use, all url routing done though /routes/index

// var usersRouter = require('./routes/users');
// var bookRouter = require('./routes/book');
// var readerRouter = require('./routes/reader')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    session({
      secret: 'your_secret_key',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', authRouter)
// app.use('/users', usersRouter);
// app.use('/book', bookRouter);
// app.use('/reader', readerRouter);

module.exports = app;
