import React from 'react';

const CategorySlider = ({ categories, setSelectedCategory }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2 bg-gray-100">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category)}
          className="inline-block px-4 py-2 mx-2 text-sm font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySlider;
