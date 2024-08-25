import React from 'react';
import './ElectronicsSection.css';
import { useNavigate } from 'react-router-dom';
// Sample data for electronics images and text


const ElectronicsSection = () => {
  const navigate = useNavigate();
  const handleImageClick = (link) => {
    navigate(link); // Navigate to the specific link when the image is clicked
  };
  const electronicsData = [
    { id: 1,  imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Laptop Support',link: '/ACRepairPage' } ,
    { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Desktop Support' },
    { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Macbook support' },
    { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Printer Support' },
    { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Coding issue' },
    { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Component Replacement' },
    // { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Mobile Extended Warranty' },
    // { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Laptop Complete Care' },
    // { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Microwave Extended Warranty' },
    // { imgSrc: 'https://i.postimg.cc/LXsL8sQk/macbook.png', text: 'Laptop Protection Plans' },
  ];
  return (
    
    <div className="heading">
    <h1>Explore Our Services</h1>
    <div className="electronics-section">
      <div className="electronics-card">
        {electronicsData.map((item, index) => (
          <div className="electronics-item" key={index} onClick={() => handleImageClick(item.link)}>
            <div className="electronics-image-container">
              <img src={item.imgSrc} alt={item.text} className="electronics-image" />
            </div>
            <div className="electronics-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ElectronicsSection;
