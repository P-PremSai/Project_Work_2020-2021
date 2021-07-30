const express = require('express');
var path = require('path');
const app = express();
var bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const jwt = require('jsonwebtoken');
const {check,validationResult} = require('express-validator');

var sid = null;
var student = null;
var academic = null;
var father = null;
var mother = null;
var address = null;

//------------ Passport Configuration ------------//
require('./config/passport')(passport);

// creating connection to database
const db =require('./database/connect.js');


//------------ EJS Configuration ------------//
//app.use(expressLayouts);
app.set('views',path.join(__dirname,'static'));
app.set('view engine', 'ejs');
app.use(express.static('static'));


//------------ Bodyparser Configuration ------------//
app.use(express.urlencoded({ extended: false }))

//------------ Express session Configuration ------------//
app.use(session({
    secret: 'secret',
    cookie :{maxAge : 3000},
    resave : true,
    saveUninitialized : true
  }));

//------------ Passport Middlewares ------------//
app.use(passport.initialize());
app.use(passport.session());

//------------ Connecting flash ------------//
app.use(flash());

//------------ Global variables ------------//
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
//------------ Routes ------------//
app.use('/', require('./routes/index'));
app.use('/', require('./routes/page2'));
app.use('/', require('./routes/page3'));
app.use('/', require('./routes/success'));
app.use('/auth', require('./routes/auth'));


//---------------initialing server----------//
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));


