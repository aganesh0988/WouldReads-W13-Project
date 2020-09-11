const express = require('express');
const { userBook, Book, Bookshelf, authorBook, Author, Review } = require('../db/models');
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors, csrfProtection } = require("../utils");

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const allBooks = await Book.findAll({})

    res.render("explore-books", { allBooks, userId:req.session.auth.userId })
}))

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId
    const book = await Book.findByPk(req.params.id)
    const author = await authorBook.findAll({
        where: { bookId: req.params.id },
        include: Author
    })
    const userReview = await Review.findOne({
        where:[{bookId:req.params.id,}, {userId}]
    })
    const review = await Review.findAll({ where: { bookId: req.params.id } })
    res.render('book', { book, author, review, userReview, userId, token: req.csrfToken() })
}));

const reviewValidators = [
    check('')
      .exists()
      .withMessage(''),
    check('')
      .exists()
      .withMessage(''),
    ];

// router.post('/:id/reviews/', csrfProtection, reviewValidators, handleValidationErrors, asyncHandler( async (req, res) => {
//     res.redirect(`/books/${req.params.id}`, {token: csrfToken()})
// }));

router.post('/:id/reviews/', csrfProtection, asyncHandler( async (req, res) => {
    const userId = req.body.userId
    const book = await Book.findByPk(req.params.id)
    const author = await authorBook.findAll({
        where: { bookId: req.params.id },
        include: Author
    })
    const userReview = await Review.create({
        rating: req.body.bookRating,
        review: req.body.bookReview,
        userId: userId,
        bookId: req.params.id
    })
    const review = await Review.findAll({ where: { bookId: req.params.id } })
    res.render('book', { book, author, review, userReview, userId, token: req.csrfToken() })
}));

module.exports = router;
