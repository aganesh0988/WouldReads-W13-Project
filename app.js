const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const { environment } = require('./config');
const app = express();
// const indexRouter = require("./routes/index")
const pagesRouter = require('./routes/pages')
const userBookshelf = require("./routes/bookshelves")

app.use(morgan("dev"));
app.use(express.json())
app.use(cors({}));
app.set('view engine', 'pug')
//latest code was pushed to git if youre interested in it. Nice, thanks Ill pull it
// app.use('./images', express.static('images'))

app.get('/', (req, res) => {
  res.send('hello')
});
// app.use("/", indexRouter)
app.use('/public', express.static('public'));
app.use("/users", userBookshelf)

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
