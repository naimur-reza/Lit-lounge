import React from "react";
import { useLottie } from "lottie-react";
import reader from "../../../assets/reader.json";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Home = () => {
  const options = {
    animationData: reader,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="my-container flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="lg:w-[540px] space-y-2 p-3 lg:p-0">
        <h1 className="font-semibold">On Sale!</h1>
        <h1 className={"text-4xl text-slate-700  font-extrabold "}>
          The future belongs to those who believe in the beauty of <span className="text-red-500">their dreams</span>
        </h1>
        <p className="font-medium py-5 text-slate-700 text-md">The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it." - Steve Jobs, Stanford University Commencement Speech, 2005</p>
        <div>
            <Link to={"/books"} className="btn">Visit Store <ShoppingCartIcon className="w-6"/> </Link>
            <button className="ml-6 font-semibold">Learn More</button>
        </div>
      </div>
      <div className="lg:w-[600px]">{View}</div>
    </div>
  );
};

export default Home;
