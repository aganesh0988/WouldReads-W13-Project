const express = require('express');
const app = express();
const router = express.Router();
const {Book, User} = require('../db/models')
// router.use(require('csurf')({ cookie: true }));
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true })
app.set('view engine', 'pug');
app.use(require('body-parser').urlencoded({extended:false}))
app.use(require('cookie-parser')())

router.get('/login', async (req, res) => {
  // const books = Book.findAll();
  res.render('log-in')
})

router.post('/login', csrfProtection, async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body;

  const user = db.User.build({
    firstName,
    lastName,
    email,
  })
})

// router.get('/', async (req, res) => {
//   res.render('/')
// })
// router.get('/sign-up', async (req, res) => {
//   res.render('sign-up')
// })

// router.post('/login', async (req, res) => {
//   user.create((req.body))
//   res.redirect('/')
// })
module.exports = router;
