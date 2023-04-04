import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBooks from './SingleBooks';

const Books = () => {
    const bookData = useLoaderData();
    const {books } = bookData;
    return (
        <div className='my-container grid-cols-1 grid lg:grid-cols-4 sm:grid-cols-2 gap-3 py-10'>
            {
                books.map(book => <SingleBooks key={book.isbn13} book={book}></SingleBooks> )
            }
        </div>
    );
};

export default Books;