module.exports = function(app) {
  var Book = app.models.Book;
  var Page = app.models.Page;

     var books = [
      {id: 1, title: 'Loopback for Noobs', author: 'Peter Pan'},
      {id: 2, title: 'The book of life', author: 'Max Mustermann'},
      {id: 3, title: 'The last book', author: 'Peter Petersen'}
    ];
    Book.create(books[0], function(err, instance) {
      if (err) return console.error(err);
      console.log('Book created: ', instance);
    });
    Book.create(books[1], function(err, instance) {
      if (err) return console.error(err);
      console.log('Book created: ', instance);
    });
    Book.create(books[2], function(err, instance) {
      if (err) return console.error(err);
      console.log('Book created: ', instance);
    });

  var pages = [
    {id: 1, bookId: 1, number: 1, content: 'Dear Reader, In this book you will learn about creating relations thorugh models containing remote methods'},
    {id: 2, bookId: 1, number: 2, content: 'Before we begin, read the book about node.js.'},
    {id: 3, bookId: 1, number: 3, content: 'This is page three of the Loopback for Noobs book. All other pages are missing :-('},
    {id: 4, bookId: 2, number: 100, content: 'This is page 100 of the book of life.'},
  ];
  Page.create(pages[0], function(err, instance) {
    if (err) return console.error(err);
    console.log('Page created: ', instance);
  });
  Page.create(pages[1], function(err, instance) {
    if (err) return console.error(err);
    console.log('Page created: ', instance);
  });
  Page.create(pages[2], function(err, instance) {
    if (err) return console.error(err);
    console.log('Page created: ', instance);
  });

};
