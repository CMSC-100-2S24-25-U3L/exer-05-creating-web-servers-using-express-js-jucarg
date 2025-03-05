const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.post('/add-book', (req, res) => {
    const { bookName, isbn, author, yearPublished } = req.body;
    if (!bookName || !isbn || !author || !yearPublished) {
        console.log('> {success: true}');
    } else {
        return res.json; // sends a response
    }

    // if book is present


});

app.get('/find-by-isbn-author', (req, res) => {
    const {isbn, author} = req.query;


});

// this tells our server to listen to the port 3000
// we can also pass an optional callback function to execute after the server starts
app.listen(3000, () => { console.log('Server started at port 3000') });