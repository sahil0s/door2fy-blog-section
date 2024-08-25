import React from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
import { FcSearch } from "react-icons/fc";
import './LocationSearch.css';
import { HiChevronDown } from "react-icons/hi";

const LocationSearch = () => {
  return (
    <div className="page-heading">
    <h1>Expert Care for Your Device</h1>


    <div className="location-search-container">
      <div className="location-search">
        <div className="location-icon-wrapper">
          <FaMapMarkerAlt className="location-icon" />
        </div>
        <input type="text" placeholder="Delhi NCR" className="location-input" />
        <div className="arrow-wrapper">
          <HiChevronDown className="arrow-icon" />
        </div>
        <div className='arrow'>|</div>
        <input type="text" placeholder="Search " className="search-input" />
        <button className="search-button">
          <FcSearch className="search-icon" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default LocationSearch;

// import { HiChevronDown } from "react-icons/hi";
