import React from "react";
import narnia from "../assets/images/narnia.jpg";

export const SingleBook = () => {
  return (
    <section>
      <div className="mb-6 text-sm text-gray-600">
        <a href="Home" className="hover:text-blue-600">
          Home
        </a>
        &gt;
        <a href="Books" className="mx-2 hover:text-blue-600">
          Books
        </a>
        &gt;
        <span className="text-gray-800 font-medium ml-2">
          The Chronicles of Narnia
        </span>
      </div>
      <div className="md:col-span-1">
        <div className="">
          <img src={narnia} alt="" className="w-[440px] h-[560px]" />
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <button className="w-full py-2 px-4 border text-black-700 bg-blue hover:bg-gray-50 ">
          Reserve Now
        </button>
        <button className="w-full py-2 px-4 border text-black-700 bg-blue-600 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Add to Reading List
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">The Chronicles of Narnia</h1>
        <p className="text-xl text-gray-700 mb-4">by <span className="font-semibold">Clive Staples Lewis</span></p>
        <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
      </div>
    </section>
  );
};
export default SingleBook;
