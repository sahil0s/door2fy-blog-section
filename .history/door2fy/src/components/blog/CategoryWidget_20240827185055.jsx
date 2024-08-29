import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../Service/fetchCategories';
import './.css';

const CategoryWidget = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };

    getCategories();
  }, []);

  return (
    <div className="CategoryWidget">
      <h3>Categories</h3>
      <div className="category-list">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div 
              key={category.slug} 
              className="category-item"
              onClick={() => onSelectCategory(category.slug)}
            >
              <span>{category.name}</span>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryWidget;
