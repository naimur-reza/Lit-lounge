import React from "react";

const SingleBooks = ({ book }) => {
  const { title, isbn13, subtitle, price, image, url } = book;
  return (
    <div className=" p-4 shadow-lg rounded-md  relative hover:-translate-y-2 transition duration-200">
      <div>
        <img className="object-cover w-full " src={image} alt="book-cover" />
      </div>
      <div className=" font-semibold  p-4 rounded-md bg-black bg-opacity-70 text-white absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col">
        <h1>{title}</h1>
        <h1 className="py-3">{subtitle.slice(0,45)}...</h1>
        <p className="mt-auto text-lg">Price: {price}</p>
      </div>
    </div>
  );
};

export default SingleBooks;
