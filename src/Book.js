import React from 'react';
import style from './book.module.css';

const Book = ({ title, image, author, publishDate }) => {
    return (
        <div className={style.book}>
            <h1>{title}</h1>
            <img src={image} alt={image} />
            <p>{author}</p>
            <p>{publishDate}</p>
        </div>
    );
}

export default Book;