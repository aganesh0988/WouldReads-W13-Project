const express = require('express');
const { check, validationResult } = require('express-validator');
//const app = express();
const router = express.Router();
// const {Book, User} = require('../db/models')
// router.use(require('csurf')({ cookie: true }));
// const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true })
// app.set('view engine', 'pug');
// router.use(require('body-parser').urlencoded({extended:false}))
// router.use(require('cookie-parser')())

router.get('/register',(req, res) => {
  // const user = db.User.build();
  // res.render('user-register', {
  //   title: 'Register',
  //   user,
  //   csrfToken: req.csrfToken(),
  // });
  res.send(`We are the bestest team ever!`)
});

// const userValidators = [
// check('firstName')
//   .exists({ checkFalsy: true })
//   .withMessage('Please provide a value for First Name')
//   .isLength({ max: 50 })
//   .withMessage('First Name must not be more than 50 characters long'),
// check('lastName')
//   .exists({ checkFalsy: true })
//   .withMessage('Please provide a value for Last Name')
//   .isLength({ max: 50 })
//   .withMessage('Last Name must not be more than 50 characters long'),
// check('emailAddress')
//   .exists({ checkFalsy: true })
//   .withMessage('Please provide a value for Email Address')
//   .isLength({ max: 255 })
//   .withMessage('Email Address must not be more than 255 characters long')
//   .isEmail()
//   .withMessage('Email Address is not a valid email'),
// check('password')
//   .exists({ checkFalsy: true })
//   .withMessage('Please provide a value for Password')
//   .isLength({ max: 50 })
//   .withMessage('Password must not be more than 50 characters long'),
// check('confirmPassword')
//   .exists({ checkFalsy: true })
//   .withMessage('Please provide a value for Confirm Password')
//   .isLength({ max: 50 })
//   .withMessage('Confirm Password must not be more than 50 characters long'),
// ];

// router.post('/user/register', csrfProtection, userValidators,
//   asyncHandler(async (req, res) => {
//     const {
//       emailAddress,
//       firstName,
//       lastName,
//       password,
//     } = req.body;

//     const user = db.User.build({
//       emailAddress,
//       firstName,
//       lastName,
//     });

//     const validatorErrors = validationResult(req);

//     if (validatorErrors.isEmpty()) {
//       await user.save();
//       res.redirect('/');
//     } else {
//       const errors = validatorErrors.array().map((error) => error.msg);
//       res.render('user-register', {
//         title: 'Register',
//         user,
//         errors,
//         csrfToken: req.csrfToken(),
//       });
//     }
//   }));

//   router.get('/user/login', csrfProtection, (req, res) => {
//     res.render('user-login', {
//       title: 'Login',
//       csrfToken: req.csrfToken(),
//     });
//   });

//   const loginValidators = [
//     check('emailAddress')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Email Address'),
//     check('password')
//       .exists({ checkFalsy: true })
//       .withMessage('Please provide a value for Password'),
//   ];

//   router.post('/user/login', csrfProtection, loginValidators,
//     asyncHandler(async (req, res) => {
//       const {
//         emailAddress,
//         password,
//       } = req.body;

//       let errors = [];
//       const validatorErrors = validationResult(req);

//       if (validatorErrors.isEmpty()) {
//         const user = await db.User.findOne({ where: { emailAddress } });

//       if (user !== null) {
//         const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

//         if (passwordMatch) {
//           loginUser(req, res, user);
//           return res.redirect('/');
//         }
//       }

//       // Otherwise display an error message to the user.
//       errors.push('Login failed for the provided email address and password');
//       } else {
//         errors = validatorErrors.array().map((error) => error.msg);
//       }

//       res.render('user-login', {
//         title: 'Login',
//         emailAddress,
//         errors,
//         csrfToken: req.csrfToken(),
//       });
//     }));

module.exports = router;





















// const express = require('express');
// const app = express();
// const router = express.Router();
// const {Book, User} = require('../db/models')
// // router.use(require('csurf')({ cookie: true }));
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true })
// app.set('view engine', 'pug');
// app.use(require('body-parser').urlencoded({extended:false}))
// app.use(require('cookie-parser')())

// router.get('/login', csrfProtection, (req, res) => {
//   res.render('log-in', {
//     csrfToken: req.csrfToken(),
//   });
// });

// const loginValidators = [
//   check('emailAddress')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Email Address'),
//   check('password')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Password'),
// ];

// router.post('/login', csrfProtection, loginValidators,
//   asyncHandler(async (req, res) => {
//     const {
//       emailAddress,
//       password,
//     } = req.body;

//     let errors = [];
//     const validatorErrors = validationResult(req);

//     if (validatorErrors.isEmpty()) {
//       // TODO Attempt to login the user.
//     } else {
//       errors = validatorErrors.array().map((error) => error.msg);
//     }

//     res.render('log-in', {
//       emailAddress,
//       errors,
//       csrfToken: req.csrfToken(),
//     });
//   }));

// router.post('/login', csrfProtection, async (req, res) => {
//   const {
//     firstName,
//     lastName,
//     email,
//     password
//   } = req.body;

//   const user = db.User.build({
//     firstName,
//     lastName,
//     email,
//   })
// })

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
