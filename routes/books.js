const express = require('express');
const { userBook, Book, Bookshelf, authorBook, Author, Review } = require('../db/models');
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("../utils");

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const allBooks = await Book.findAll({})

    res.render("book-container", { allBooks })
}))

// "/books/:id(\\d++)"
// action: get
// page: render "single-book.pug"
// notes: displays book cover, title, published date, author, summary, genre
// notes: displays books reviews
// notes: include button that links to "/books/:id/review"
router.get('/:id', asyncHandler(async (req, res) => {
    const book = await Book.findByPk(req.params.id)
    const author = await authorBook.findAll({
        where: { bookId: req.params.id },
        include: Author
    })
    const review = await Review.findAll({ where: { bookId: req.params.id } })
    // console.log("I am a console log", author[0].Author.firstName)
    res.render('book', { book, author, review })
}));

// "/books/:id/reviews"
// action: get
// page: render "review-form.pug"
// notes: form that allows for user to input rating (integer) and review (text)
router.get('/:id/reviews', (req, res) => {

})


// "/books/:id/reviews"
// action: post
// page: render "/books/:id(\\d++)"
// notes: creates review in DB and redirects to that book's info page
router.post('/:id/reviews', (req, res) => {

})
module.exports = router;
