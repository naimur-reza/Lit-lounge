import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleBooks from './SingleBooks';
import Loader from '../Loading/Loader';

const Books = () => {
    const navigate = useNavigation();
console.log(navigate);
if(navigate.state === "loading"){
 return <Loader/>
}
    const bookData = useLoaderData();
    const {books } = bookData;
    return (
        <div className='my-container p-3 lg:p-0 grid-cols-1 grid lg:grid-cols-4 sm:grid-cols-2 gap-3 py-10'>
            {
                books.map(book => <SingleBooks key={book.isbn13} book={book}></SingleBooks> )
            }
        </div>
    );
};

export default Books;