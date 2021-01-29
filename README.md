[![Live Link][live-link-shield]][live-link-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![LinkedIn][linkedin-shieldat]][linkedin-urlat]
[![LinkedIn][linkedin-shieldd]][linkedin-urld]
[![LinkedIndd][linkedin-shielddd]][linkedin-urldd]

<br /><br />

<p align="center">
  <a target="_blank" href="https://wouldreadz.herokuapp.com/">
    <img src="https://i.gyazo.com/c49b719fd624b59fd08631284a3d90de.png" alt="WR" height="300">
  </a>
</p>

<br /><br /><br />

# About The Project
WouldReads is a clone of GoodReads.com with a Netflix style. A user can login and browse books they have or would like to read. They can also create new bookshelves to add books to.


## Built With
We developed this full-stack application using a JavaScript / Pug frontend and a Node.js / Express backend.

<img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png">
<img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png">
<img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png">
<img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png">
<img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png">
<img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png">
<img align="left" height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png">


<br /><br />



Deployed with:
* [<img alt="Heroku icon" src="https://img.icons8.com/color/452/heroku.png" align="left" height="20">](https://www.heroku.com/) [Heroku](https://www.heroku.com/)


<br /><br />


![WR](https://andreagjackson.com/images/wr2.png)

<br />

![WR2](https://andreagjackson.com/images/wr3.png)


<br /><br />


# Features
    Login/Logout
    Create User
    Books
    Bookshelves
    Reviews
    Read Status (will read, have read, etc.)

# Features - MVP
--------------
[ ] Homepage that has log-in form/ sign-up form / displays books
[x] Sign up form where users submit their first name, last name, username, password.
[x] Log-in form where users provide their email and password to log into the site.
[ ] A container on homepage to view a database of all available books displayed as covers (netflix style). Each cover is clickable for more info.
[ ] Nav bar that shows up after log-in that includes logo, myBooks (display user's bookshelves in books format), sign-out button
[ ] A Page for info about individual book that displays cover, title, author, avg rating, summary, genres
[ ] A user homepage that displays books by cover.
    [ ] On Hover shows the following info
        [ ] cover - displays photo of cover
        [ ] title - displays title
        [ ] author - display as link to click for author info
        [ ] avg rating - displays average rating of given book
        [ ] rating (user rating) - if there is a rating displays # otherwise lets user click to write review
        [ ] shelves - lists shelves the book is on
        [ ] read status - displays read status and allows user to change it
        [ ] date read - display date user read and allows user to change date
[x] A form to create bookShelves
[x] Seeder Files

Future Features
-------------------
[ ] A page to view books on specific bookshelf
[ ] allow user to click cover or title for more info on book
[ ] toggle between cover & detailed view for books
[ ] Create a book
[ ] Edit a book
[ ] OAuth to sign-in
[ ] Quotes
[ ] Search across multiple models
[ ] A page for info about an author that displays author name, author portraits, born, intro/summary, books written
[ ] allows users to add shelves without reloading the page via AJAX
[ ] allow user to add multiple bookshelves



Tables
------
https://app.quickdatabasediagrams.com/#/d/UDzJ5J

1. Books
    cover
    title
    author table reference
    rating
    date published
    summary
    genre table reference

2. Genre
    genrename

3. Authors
    born
    died
    books written
    biography
    genres
    websites?
    influences?

4. Bookshelves
    shelf-name
    3 default (want to read, reading, read)
    users
        username
        password?
        friends?

5. users/books (Joins Table)
    user reference
    book reference
    book shelf reference
    dateRead
    dateAdded
    status

6. author_books
        authorId
        bookId

7. Reviews
    review (optional)
    rating (not nullable)
    user reference
    book reference

8. Qoutes (stretch)
      quote
      author reference
      book reference

9.  Bookshelves
        shelf-name
        3 default (want to read, reading, read)


# Paths / Endpoints
front-end index.js
    "/"
        // action: get
        // page: render books.pug (extends layout.pug)
        // Notes: conditional logic in layout.pug.
        //     If !loggedIn display login form, create user form, and books.pug
        //     If loggedIn  nav bar on top with books.pug on bottom (nav bar has logo, myBooks (display user's bookshelves in books format), sign-out button)

    "/log-in"
        // action: post
        // page: form on "/"
        // notes: reload "/"

    "/sign-up"
        // action: post
        // page: form on "/"
        // notes: reload "/"

    "/sign-out"
        // action: post
        // page: button on nav bar
        // notes: log user out and redirect to "/"

    "/books/:id(\\d++)"
        // action: get
        // page: render "single-book.pug"
        // notes: displays book cover, title, published date, author, summary, genre
        // notes: displays books reviews
        // notes: include button that links to "/books/:id/review"

    "/books/:id/reviews"
        // action: get
        // page: render "review-form.pug"
        // notes: form that allows for user to input rating (integer) and review (text)

    "/books/:id/reviews"
        // action: post
        // page: render "/books/:id(\\d++)"
        // notes: creates review in DB and redirects to that book's info page

    "/users/:id/bookshelves"
        // action: get
        // page: render "bookshelves.pug"
        // notes: display users book shelves by bookshelf. Books are displayed by cover within bookshelf (netflix style). At the end of each row, an x / button to delete row (bookshelf)
        // notes: above bookshelf rows page title "my books" and + / button "Create new bookshelf" (create bookshelf form that is hidden by default and is shown when you press "+")
        // notes: on hover over book cover, display title, author, rating, genre, first 50 char of summary, button w/ drop down to add to bookshelf
        // notes: on click of book cover redirect to "/books/:id(\\d++)"
        // notes: has a form to create a new bookshelf

    "/users/:id/bookshelves"
        // action: post
        // page: after submit will add the bookshelf to "/users/:id/bookshelves" via ajax
        // notes: create a new bookshelf and add via ajax

    "/users/:id/books/:id/status"
        // action: post
        // page: after submit will add the bookshelf to "/users/:id/bookshelves" via ajax
        // notes: create a new bookshelf and add via ajax



[live-link-shield]: https://img.shields.io/badge/-LiveLink-red?style=for-the-badge&logo=red
[live-link-url]: https://wouldreadz.herokuapp.com/

[linkedin-shield]: https://img.shields.io/badge/-Andrea-red.svg?style=for-the-badge&logo=linkedin&colorB=red
[linkedin-url]: https://www.linkedin.com/in/andrea-jackson1/

[linkedin-shieldat]: https://img.shields.io/badge/-Andrew-red.svg?style=for-the-badge&logo=linkedin&colorB=red
[linkedin-urlat]:https://www.linkedin.com/in/andrew-travers-8273761bb/

[linkedin-shieldd]: https://img.shields.io/badge/-Daniel-red.svg?style=for-the-badge&logo=linkedin&colorB=red
[linkedin-urld]: https://www.linkedin.com/in/daniel-ford-29970a5a/

[linkedin-shielddd]: https://img.shields.io/badge/-Darius-red.svg?style=for-the-badge&logo=linkedin&colorB=red
[linkedin-urldd]: https://www.linkedin.com/in/darius-freeman-a7b819b4/
