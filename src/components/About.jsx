import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className="text-justify lg:text-start">
          At Maruti Sale House, we believe that beauty should be accessible to everyone. Our mission is to provide a diverse selection of beauty and cosmetic products at prices that offer exceptional value. We are dedicated to ensuring that our customers have access to a wide range of products, with many starting at just 20 INR.
        </p>
        <p className="text-justify lg:text-start">
          Whether you're looking for budget-friendly essentials or premium products, you'll find a broad spectrum of options here at Maruti Sale House.
        </p>
        <p className="text-justify lg:text-start">
          We are committed to providing a delightful shopping experience with excellent customer service and a welcoming atmosphere. Join us in our journey to make beauty affordable and accessible for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;