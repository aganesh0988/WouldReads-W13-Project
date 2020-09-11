const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection } = require('../utils.js');
const db = require('../db/models');
const { Book } = require('../db/models');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth');

//validators
const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username')
    .isLength({ max: 255 })
    .withMessage('Username must not be more than 255 characters long')
    .custom((value) => {
      return db.User.findOne({ where: { userName: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Username is already in use by another account');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    })
];

const loginValidators = [
  check('userName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];

//routes
router.get("/", csrfProtection, asyncHandler(async (req, res) => {
  const allBooks = await Book.findAll({})
  res.render('book-container', { token: req.csrfToken(), allBooks })
}));


router.post('/signup', csrfProtection, userValidators, handleValidationErrors,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      userName,
      email,
      password
    } = req.body;

    const user = await db.User.build({
      firstName,
      lastName,
      userName,
      email,
      password
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect(`/users/${user.id}/bookshelves`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      console.log(errors);
      res.render('/', {
        title: 'Sign Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      userName,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { userName } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.password.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect(`/`);
        }
      }
      errors.push('Login failed for the provided username and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('/', {
      title: 'Login',
      username,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
});







module.exports = router;
