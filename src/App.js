import React, { useState } from "react";
import "./App.css";

const BookForm = () => {
const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [isbn, setIsbn] = useState("");
const [books, setBooks] = useState([]);

const handleSubmit = e => {
e.preventDefault();
setBooks([...books, { title, author, isbn }]);
setTitle("");
setAuthor("");
setIsbn("");
};

const handleDelete = index => {
setBooks(books.filter((_, i) => i !== index));
};

return (
<>
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="title">Title:</label>
<input
type="text"
id="title"
value={title}
onChange={e => setTitle(e.target.value)}
/>
</div>
<div>
<label htmlFor="author">Author:</label>
<input
type="text"
id="author"
value={author}
onChange={e => setAuthor(e.target.value)}
/>
</div>
<div>
<label htmlFor="isbn">ISBN:</label>
<input
type="text"
id="isbn"
value={isbn}
onChange={e => setIsbn(e.target.value)}
/>
</div>
<button type="submit">Add Book</button>
</form>
<hr />
<h3>Added Books</h3>
<ul>
{books.map((book, index) => (
<li key={index}>
{book.title} by {book.author} ({book.isbn}){" "}
<button onClick={() => handleDelete(index)}>Delete</button>
</li>
))}
</ul>
</>
);
};

export default BookForm;



