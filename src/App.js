import React, { useEffect, useState } from 'react';
import Book from "./Book";
import './App.css';

const App = () => {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getBooks();
  }, [query]);

  const getBooks = async () => {
    const response = await fetch(`http://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
    setBooks(data.docs);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  // Sorting Functions

  const sortAlpha = () => {
    const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
    setBooks(sortedBooks);
  }

  const sortDate = () => {
    const sortedBooksDate = [...books].sort((a, b) => a.first_publish_year - b.first_publish_year);
    setBooks(sortedBooksDate);
  }

  return (
    <div className="App">

      <h1>Book Search</h1>

      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" type="text" value={search} onChange={updateSearch}></input>
        <button className="searchButton" type="submit">Search</button>
      </form>

      <div className="sortButtons">
        <button className="sortButton" type="submit" onClick={sortAlpha}>Sort by Title</button>
        <button className="sortButton" type="submit" onClick={sortDate}>Sort by Date</button>
      </div>

      <div className="books">
        {books.map(book => (
          <Book
            key={book.key}
            title={book.title}
            image={"http://covers.openlibrary.org/b/id/" + book.cover_i + "-M.jpg"}
            author={book.author_name}
            publishDate={book.first_publish_year} />
        ))}
      </div>

    </div>
  );

}

export default App;