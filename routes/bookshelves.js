const express = require('express');
const { userBook, Book, Bookshelf, userBookshelf } = require('../db/models');
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("../utils");
const user = require('../db/models/user');

const router = express.Router();

router.get("/create", (req,res)=>{
    res.render('create-bookshelf')
})

router.post("/create", asyncHandler( async (req, res) =>{
  const { shelfName, userBookId } = req.body
  const newBookshelf = await Bookshelf.create({shelfName})
  const oldUserBook = await userBook.findByPk(userBookId)
  await userBook.create({
    dateRead: oldUserBook.dateRead,
    bookId: oldUserBook.bookId,
    userId: oldUserBook.userId,
    bookshelfId: newBookshelf.id,
    statusId: oldUserBook.statusId
  })
  res.redirect(`/users/${oldUserBook.userId}/bookshelves`)
}));

router.post("/:uid/delete/:shelfName", asyncHandler(async(req, res) => {
  const bookshelf = await Bookshelf.findOne({where:{shelfName: req.params.shelfName}})
  console.log(bookshelf.id)
  console.log(req.params.uid)
  const userBookshelfz = await userBook.findOne({where:[{bookshelfId:bookshelf.id},{userId: req.params.uid}]})
  userBookshelfz.destroy();
  res.redirect(`/users/${req.params.uid}/bookshelves`)
}));

module.exports = router;
