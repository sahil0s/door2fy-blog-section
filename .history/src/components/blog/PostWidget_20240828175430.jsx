import React, { useState, useEffect } from 'react';
import { fetchCategories } from '../Service/fetchPosts';

const CategoryWidget = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onSelectCategory(category.slug)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryWidget;
  