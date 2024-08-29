import React from 'react';
import './CategoryWidget.css'; // Import CSS file for styling

const CategoryWidget = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-widget">
      <h3>Categories</h3>
      <ul>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.slug} onClick={() => onSelectCategory(category)} className="category-item">
              {category.name}
            </li>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryWidget;
