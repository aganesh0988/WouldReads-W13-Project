const express = require('express');
const { userBook, Book, Bookshelf } = require('../db/models');
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("../utils");
const user = require('../db/models/user');

const router = express.Router();

router.get("/:id/bookshelves", asyncHandler ( async (req, res) =>{
    const userBooks = await userBook.findAll({
        where: {userId: req.params.id},
        include: [Book, Bookshelf]
    })

    // let shelves = userBooks.filter(shelf => {
    //     if(!shelves.includes(shelf.Bookshelf.shelfName)) {
    //         return shelf.Bookshelf.shelfName
    //     }
    // })

    let shelves = userBooks.reduce((shelvesObj, book) => {
        if(!Object.keys(shelvesObj).includes(book.Bookshelf.shelfName)) {
            shelvesObj[book.Bookshelf.shelfName] = [];
        }
        shelvesObj[book.Bookshelf.shelfName].push(book);
        return shelvesObj;
    }, {})

    console.log('Shelves: ', shelves)

    // console.log("this is my consolelog", shelves)
    res.render('user-bookshelves', {shelves})
}));

router.post("/:id/bookshelves", asyncHandler(async(req, res) => {
    res.send('Working')
}));

module.exports = router;
