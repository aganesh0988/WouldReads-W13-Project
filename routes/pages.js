const express = require('express');
const app = express();
const router = express.Router();
// router.use(require('csurf')({ cookie: true }));
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true })

router.get('/login', async (req, res) => {
  res.render('log-in')
})

router.post('/login', async (req, res) => {
  user.create(req.body)
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
