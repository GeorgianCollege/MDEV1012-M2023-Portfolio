// 3rd Party Modules
import createError, { HttpError } from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// DB Modules
import mongoose from 'mongoose';
import DB from './db';

// modules for authentication
import session from 'express-session'; // use session
import passport from 'passport'; // authentication
import passportLocal from 'passport-local'; // authentication strategy
import flash from 'connect-flash'; // auth messaging

// authentication objects
let localStrategy = passportLocal.Strategy; // alias
// import User Model
import User from '../Models/user'

// Connect to the DB with the DB.LocalURI
mongoose.connect(DB.RemoteURI);

// create a db connection event
mongoose.connection.on('connected', () =>{
  console.log(`Connected to MongoDB`);
});

// create an error event
mongoose.connection.on('error', (err) =>{
  console.log(`Error: ${err}`);
});

import indexRouter from '../Routes/index';

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// setup express session
app.use(session({
  secret: DB.Secret,
  saveUninitialized: false,
  resave: false
}));

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// implement an Auth Strategy
passport.use(User.createStrategy());

//User.serializeUser()

// serialize and deserialize the user data
passport.serializeUser(User.serializeUser() as any);
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next)
{
  next(createError(404));
});

// error handler
app.use(function(err: HttpError, req: any, res: any, next: NextFunction): void
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
