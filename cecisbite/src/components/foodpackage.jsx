import { useState } from "react";

export default function FoodPackage({ image, price, details }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const message = `Hello! I'm interested in ordering the food package priced at ${price}. Could you please provide more details about the menu and how to place an order? Thank you!`;

  return (
    <div className="flex flex-col w-full md:max-w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-60 md:h-56 w-full overflow-hidden">
        <img
          src={image}
          alt="Food package"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <h2 className="text-lg font-black text-primary font-inter mb-1">
          {price}
        </h2>

        {/* Details */}
        <p
          className={`text-sm text-gray-700 font-poppins transition-all duration-300 ${
            !isExpanded && "line-clamp-2"
          }`}
        >
          {details}
        </p>

        {/* Read More */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-xs font-semibold mt-1 hover:underline self-start"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>

        {/* Spacer pushes button down */}
        <div className="grow"></div>

        {/* Order Button */}
        <a
          href={`https://wa.me/233248967727?text=${encodeURIComponent(message)}`}
          className="bg-primary text-white text-sm font-bold font-inter py-2 rounded-lg text-center mt-4 hover:bg-primary/90 transition-colors"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
