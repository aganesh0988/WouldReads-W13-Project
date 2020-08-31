Models needed
    users
        username
        password?
        friends?

    books
        cover
        title
        author table reference
        rating
        date published
        summary
        genre table reference

    Genre
        genrename

    bookshelf
        shelf-name
        3 default (want to read, reading, read)

    authors
        born
        died
        books written
        biography
        genres
        websites?
        influences?

    users/books
        user reference
        book reference
        book shelf reference
        dateRead
        dateAdded
        status

    reviews
        review (optional)
        rating (not nullable)
        user reference
        book reference

    qoutes (stretch)
        qoute
        author reference
        book reference


search bar (search users & books)
Endpoints needed
    /
    /createUser
    /myBooks
    /shelf
Templates needed
Wire frames or sketches
