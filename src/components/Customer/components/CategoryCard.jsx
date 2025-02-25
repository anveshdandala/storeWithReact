import React from "react";
const CategoryCard = ({ title, description, imageUrl, itemCount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="cat-img" />
      <ul className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray">{description}</p>
        <p className="text-gra">{itemCount} items</p>
      </ul>
    </div>
  );
};

export default CategoryCard;
