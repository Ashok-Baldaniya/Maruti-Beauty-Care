import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black relative">
      <div className="background-image"></div>
      <div className="content w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight opacity-100">
          Discover a World of Beauty at Maruti Beauty Care
        </h1>
        <p className="opacity-100">
          Welcome to Maruti Beauty Care, your ultimate destination for a wide range of quality beauty and cosmetic products, all available at an unbeatable price starting from just 20₹. Explore our diverse selection and find the perfect products to enhance your beauty routine.
        </p>
      </div>
    </div>
  );
};

export default Home;