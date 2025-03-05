import express from 'express';
import fs from 'fs';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-book', (req, res) => {
    const { bookName, isbn, author, yearPublished } = req.body;
    if (!bookName || !isbn || !author || !yearPublished) {
        console.log('> {success: false}');
    } else {
        return res.json({ success: true }); // sends a response
    }

    // check if there are current isbn
    if (fs.existsSync('books.txt')) {
        const books = fs.readFileSync('books.txt', 'utf8');
        const bookCollection = books.trim().split('\n');

        if (bookCollection.some(line => line.includes(isbn))) {
            return res.json({ success: false });
        }
    }

    // Add the book
    fs.appendFileSync('books.txt', `${bookName},${isbn},${author},${yearPublished}\n`);
    return res.send({ success: true })

});

app.get('/find-by-isbn-author', (req, res) => {
    const { isbn, author } = req.query;

    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) return res.json({ success: false })

        const bookCollection = data.trim().split('\n');
        const bookFind = bookCollection.find(line => {
            const [curName, curIsbn, curAuthor, curYear] = line.split(',');
            return curIsbn === isbn && curAuthor === author;
        })

        if (bookFind) {
            const [curName, curIsbn, curAuthor, curYear] = bookCollection.split(',');
            return res.json({ success: true }, { book: bookName, isbn: curIsbn, author: curAuthor, yearPublished });
        } else {
            return res.json({ success: false });
        }
    });
});

app.get('/find-by-author', (req, res) => {
    const { author } = req.query;

    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) return res.json({ success: false });

        const bookCollection = data.trim().split('\n');
        const bookFind = books.find(line => {
            const [curName, curIsbn, curAuthor, curYear] = line.split(',');
            return curAuthor === author;
        })

        if (bookFind) {
            const [curName, curIsbn, curAuthor, curYear] = bookCollection.split(',');
            return { bookName, isbn, author: curAuthor, yearPublished };
        }
    });
});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000') });