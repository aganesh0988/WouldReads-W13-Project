const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const { environment } = require('./config');
const app = express();
const cookieParser = require('cookie-parser');
const { restoreUser } = require('./auth');


//route imports
const books = require('./routes/books')
const bookshelf = require('./routes/bookshelves')
const userBookshelf = require("./routes/userBookshelves")
const homePage = require('./routes/homePage')


//middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({}));

//pug
app.set('view engine', 'pug')

//routes
app.use('/public', express.static('public'));
app.use('/', homePage)
app.use("/books", books)
app.use("/users", userBookshelf);
app.use("/bookshelves", bookshelf);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// Custom error handlers.

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
