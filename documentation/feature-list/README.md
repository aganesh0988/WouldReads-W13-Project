# Goodreads Clone

# Features
    Login/Logout
    Create User
    Books
    Bookshelves
    Reviews
    Read Status (will read, have read, etc.)

# Features - MVP
--------------
[ ] Homepage that has log-in / sign-up options / displays books
[ ] Sign up page where users submit their first name, last name, username, password.
[ ] Log-in page where users provide their email and password to log into the site
[ ] A Page to view a database of all available books displayed as covers (netflix style). Each cover is clickable for more info.
[ ] A Page for info about individual book that displays cover, title, author, avg rating, summary, genres
[ ] A user homepage that displays a table with the following columns
    [ ] cover - displays photo of cover
    [ ] title - displays title
    [ ] author - display as link to click for author info
    [ ] avg rating - displays average rating of given book
    [ ] rating (user rating) - if there is a rating displays # otherwise lets user click to write review
    [ ] shelves - lists shelves the book is on
    [ ] read status - displays read status and allows user to change it
    [ ] date read - display date user read and allows user to change date
[ ] A page to create bookShelves
[ ] A page to view books on specific bookshelf

Future Features
-------------------
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

# Paths
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

    "/books/:id/review"
        // action: get
        // page: render "review-form.pug"
        // notes: form that allows for user to input rating (integer) and review (text)

    "/books/:id/review"
        // action: post
        // page: render "/books/:id(\\d++)"
        // notes: creates review in DB and redirects to that book's info page

    "/users/:id/bookshelves"
        // action: get
        // page: render "bookshelves.pug"
        // notes: display users book shelves by bookshelf. Books are displayed by cover within bookshelf (netflix style). At the end of each row, an x / button to delete row (bookshelf)
        // notes: above bookshelf rows page title "my books" and + / button "Create new bookshelf"
        // notes: on hover over book cover, display title, author, rating, genre, first 50 char of summary, button w/ drop down to add to bookshelf
        // notes: on click of book cover redirect to "/books/:id(\\d++)"

<!-- Guide from Project Requirements -->
A production README file for your GitHub repository containing
Brief explanation of what the app is and does
    Allows users to track books they've read and want to read.
Link to live site
Discussion of technologies used
    Express
    PUG
    Sequelize (Postgres)
    CSS (bootstrap? something else?)
Discussion of two features that show off the team's technical abilities
Discussion of both challenges faced and the way the team solved them
Code snippets to highlight the best code


<!-- name ideas -->
    mediocreReads
    DecentReads
    SatisfactoryReads
    wouldReads (In a time before Netflix)
    netReads
    netBooxs
