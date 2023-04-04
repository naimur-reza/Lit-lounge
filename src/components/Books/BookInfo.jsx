import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loading/Loader";

const BookInfo = () => {
    //   navigate  for loader spiner
const navigate = useNavigation();
console.log(navigate);
if(navigate.state === "loading"){
 return <Loader/>
}
  const bookInfo = useLoaderData();
  const {
    title,
    pages,
    price,
    language,
    url,
    year,
    publisher,
    desc,
    authors,
    image,
  } = bookInfo;
  const [fold, setFold] = useState(true);

  return (
    <div className="flex border overflow-hidden  gap-10 justify-around my-container p-3 lg:p-10 my-10 flex-col lg:flex-row text-gray-900">
      <div className=" lg:w-96">
        <img className=" shadow-lg rounded-md w-full" src={image} alt="" />
      </div>
      <div className="space-y-3   lg:w-96 py-10 lg:p-0 ">
        <p className="bg-yellow-400 w-fit p-1 text-sm rounded-full ">
          Brand New
        </p>
        <p className="text-4xl  font-bold">{title}</p>
        <p className="font-medium">Authors: {authors}</p>
        <p className="font-medium">Publisher: {publisher}</p>
        <p>Published In: {year}</p>
        {fold ? (
          <p className="text-gray-800 text-sm">
            {desc.slice(0, 100)}...
            <span
              className="cursor-pointer font-semibold text-red-500 "
              onClick={() => setFold(!fold)}>
              Read More
            </span>
          </p>
        ) : (
          <p className="text-gray-800 text-sm">
            {desc}
            <span
              className="text-red-500 cursor-pointer font-semibold"
              onClick={() => setFold(!fold)}>
              Read Less
            </span>{" "}
          </p>
        )}
        <button className="btn">Buy Now</button>
        <span className="font-bold ml-4 lg:ml-10">Price: {price}</span>
      </div>
    </div>
  );
};

export default BookInfo;
