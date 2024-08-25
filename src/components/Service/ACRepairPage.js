import React, { useState }  from 'react';
import Navbar from '../Navbar/Navbar'; // Make sure you have your Navbar component path correct
import './ACRepairPage.css'; // Add your custom styles here
// import { HiChevronDown } from 'react-icons/hi';
import { FaCheck, FaChevronUp, FaChevronDown  } from 'react-icons/fa';

// 

const ACRepairPage = () => {
  
  const [activeServiceType, setActiveServiceType] = useState('split');
    const [expandedCard, setExpandedCard] = useState(null);

    const handleServiceTypeChange = (type) => {
      setActiveServiceType(type);
      setExpandedCard(null); // Reset the expanded card when switching service types
    };

    const handleExpandClick = (index) => {
      setExpandedCard(expandedCard === index ? null : index);
    };
    
    const splitACServices = [
      { name: 'AC Jet Service', description: 'Cleaning of AC with water jet and lower power consumption', price: 599 },
      { name: 'AC Gas Refill', description: 'Refilling the gas to improve cooling efficiency', price: 799 },
      { name: 'AC Installation', description: 'Professional AC installation service', price: 999 },
      { name: 'AC Dismantling', description: 'Safe and careful dismantling ', price: 499 },
    ];
    const windowACServices = [
      { name: 'AC Jet Service ', description: 'Deep cleaning with water jet for window AC', price: 499 },
      { name: 'AC Gas Refill ', description: 'Refilling gas for window AC', price: 699 },
      { name: 'AC Installation ', description: 'Installation service for window AC', price: 899 },
      { name: 'AC Dismantling ', description: 'Dismantling service for window AC', price: 399 },
    ];
    const services = activeServiceType === 'split' ? splitACServices : windowACServices;
  return (
    <div>
      {/* Import the Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="ac-repair-container">
        {/* Left Side: Image */}
        <div className="ac-repair-image">
          <img src="/images/service1.png" alt="AC Repair" /> {/* Replace with your image path */}
        </div>



                                
        {/* Right Side: Text and Button */}
        <div className="ac-repair-content">
     
          <h1>AC Repair and Service in Delhi</h1>
          <p>
            Sit back, relax and let us take care of your AC servicing & repairs.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>

                                                     {/* //card Section // */}

<div className='banner'></div>
                                                
        {/* <div className='banner'></div>                                             */}
      <div className="ac-repair-section">
  
 
      {/* Left Side Content */}
      <div className="ac-repair-left">
        <h2>Regular AC Maintenance Helps To:</h2>
        <ul className="ac-repair-list">
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            Improve Cooling
          </li>
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            Reduce Electricity Bills
          </li>
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            Increase AC's Lifespan
          </li>
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            Minimize Breakdowns
          </li>
        </ul>

        <h2>AC Repairs & Maintenance Service:</h2>
        <ul className="ac-repair-list">
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            High-Quality AC Repairs
          </li>
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            Experienced AC Service Engineers
          </li>
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            90-day warranty on spare parts
          </li>
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            AC AMC  Plans Available
          </li>
          <li>
            <span className="bullet-icon"><FaCheck /></span>
            30-day warranty on service
          </li>
        </ul>

      </div>

      {/* Right Side Content */}
      <div className="ac-repair-right">
        <h2>AC Service & Maintenance Plans</h2>
        <p>Select the type of Air Conditioner:</p>
        <div className="ac-services-container">
      <div className="service-type-buttons">
        <button
          className={`service-type-button ${activeServiceType === 'split' ? 'active' : ''}`}
          onClick={() => handleServiceTypeChange('split')}
        >
          Split AC
        </button>
        <button
          className={`service-type-button ${activeServiceType === 'window' ? 'active' : ''}`}
          onClick={() => handleServiceTypeChange('window')}
        >
          Window AC
        </button>
      </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-left">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <div className="card-right">
              <p>₹{service.price}</p>
              <button className="add-button" onClick={() => handleExpandClick(index)}>
                Add+
              </button>
              <button className="toggle-btn" onClick={() => handleExpandClick(index)}>
            {expandedCard === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>
            </div>
           
            {/* {expandedCard === index && (
              <ul className="service-details">
                <li>Cleaning of AC</li>
                <li>Gas pressure check</li>
                <li>Cleaning of the outdoor unit</li>
                <li>Pre and post service checks</li>
                <li>Cleaning of the area</li>
              </ul>
            )} */}
                {expandedCard === index && (
          <div className="card-details">
            <ul>
              <li><FaCheck className="check-icon" /> Cleaning of AC filters, cooling coil, drain tray, etc.</li>
              <li><FaCheck className="check-icon" /> Gas pressure check.</li>
              <li><FaCheck className="check-icon" /> Cleaning of the outdoor unit with water jet.</li>
              <li><FaCheck className="check-icon" /> Pre and post-service check of AC controls.</li>
            </ul> 
            </div>
        )}
          </div>
          
        ))}
      </div>
    </div>


</div>


    </div>
    <div className="why-choose-section">
      <h2 className="why-choose-heading">Why Choose Onsitego AC Repair Service in Delhi?</h2>
      <div className="why-choose-grid">
        <div className="why-choose-card">
          <img
            src="/images/sec1.webp"
            alt="Qualified Engineers"
            className="why-choose-image"
          />
          <h3 className="why-choose-card-heading">Qualified Engineers</h3>
          <p className="why-choose-card-subheading">
            In-house AC Technicians with 10+ years of experience
          </p>
        </div>
        <div className="why-choose-card">
          <img
            src="/images/sec2.webp"
            alt="High-Quality AC Repairing"
            className="why-choose-image"
          />
          <h3 className="why-choose-card-heading">High-Quality AC Repairing</h3>
          <p className="why-choose-card-subheading">
            High-Quality AC Spares, 90-day warranty on spare parts & 30-day warranty on service
          </p>
        </div>
        <div className="why-choose-card">
          <img
            src="/images/sec3.webp"
            alt="Service Expertise"
            className="why-choose-image"
          />
          <h3 className="why-choose-card-heading">Service Expertise</h3>
          <p className="why-choose-card-subheading">
            Trusted by 80 Lakh+ Customers
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ACRepairPage;
