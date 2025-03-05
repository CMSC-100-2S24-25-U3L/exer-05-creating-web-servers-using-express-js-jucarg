import needle from 'needle';

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=J.K+Rowling', (err, res) => {
    console.log(res.body); // Should return book details or { success: false }
});

needle.post(
    'http://localhost:3000/add-book',
    { bookName: 'The Hobbit', isbn: '978-0-261-10300-7', author: 'J.R.R. Tolkien', yearPublished: '1937' },
    (err, res) => {
        console.log(res.body); // Should return { success: true }
    }
);
