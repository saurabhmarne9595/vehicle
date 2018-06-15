var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vehicleRouter = require('./routes/vehicle');
var db_vehicleRouter = require('./routes/db_vehicle');
var influx_db = require ('./routes/db_influx_data');

const cred ='mongodb://localhost:27017/vehicle_db';


//Requiring CORS
//const cors=require('cors')
//app.use(cors());
//***************MongoDB Operations******************** */

mongoose.connect(cred);


//mongoose.connect(cred.database);
mongoose.connection.on('connected', () => {
    console.log('connected to mongoose Database');
});


mongoose.connection.on('error', (err) => {
    console.log('error in connection:', err);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/index', indexRouter);
app.use('/vehicle', vehicleRouter);
app.use('/db_vehicle', db_vehicleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
