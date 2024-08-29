import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../Service/fetchPosts'; // Assuming you have this function to fetch categories
import './Blog.css'

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
        <div className="category-widget">
            <h3>Categories</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category.slug}>
                        <button onClick={() => onSelectCategory(category.slug)}>
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryWidget;
