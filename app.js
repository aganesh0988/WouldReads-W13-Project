const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const { environment } = require('./config');
const app = express();
const cookieParser = require('cookie-parser');
const { restoreUser } = require('./auth');
// const indexRouter = require("./routes/index")

const bookshelf = require('./routes/bookshelves')
const userBookshelf = require("./routes/userBookshelves")
const homePage = require('./routes/homePage')



app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(cors({}));
app.set('view engine', 'pug')

// app.use("/", indexRouter)
app.use('/', homePage)
app.use('/public', express.static('public'));

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
