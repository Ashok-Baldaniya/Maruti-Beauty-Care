import React, { useState, useEffect } from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { data } from '../constant.js';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(data.slice(0, 3));

  const handleLoadMore = () => {
    const currentVisibleCardsCount = visibleCards.length;
    const nextVisibleCardsCount = currentVisibleCardsCount + 3;
    setVisibleCards(data.slice(0, nextVisibleCardsCount));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 lg:pt-24 pt-16 mb-32">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            At Maruti Beauty Care, we offer a wide range of beauty and cosmetic products tailored to your needs, with prices starting from just 20 INR and extending to accommodate a variety of products and preferences. Whether you're looking for everyday essentials or luxury items, our diverse selection is designed to cater to all your beauty needs.
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-4 pt-8 lg:pt-14 justify-center">
        {visibleCards.map((d, index) => (
          <ServicesCard
            key={index}
            icon={d.img}
            title={d.title}
            description={d.description}
          />
        ))}
      </div>
      {visibleCards.length < data.length && (
        <div className="flex justify-center mt-8 mb-12">
          <Button handleClick={() => handleLoadMore()} title={"Load More"}></Button>
        </div>
      )}
    </div>
  );
};

export default Services;