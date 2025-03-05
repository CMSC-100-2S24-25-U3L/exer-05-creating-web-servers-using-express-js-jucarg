import needle from 'needle';

needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&amp;author=J.K+Rowling', (err, res) => {
    console.log(res.body);   // prints the body of the response message. In this case, “Hello”
});
needle.post(
    'http://localhost:3000/add-book',
    { name: 'book-server' }, // can be an object or a string
    (err, res) => {
        console.log(res.body);
    }
);