import Navbar from './components/Navbar/Navbar';
import './App.css';
import ImageSlider from './components/Slider/ImageSlider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocationSearch from './components/location/LocationSearch';
import ElectronicsSection  from './components/ElectronicSection/ElectronicsSection';
import Footer from './components/Footer/Footer';
import SignIn from './components/Signin/SignIn';
import ACRepairPage from './components/Service/ACRepairPage';
import ContactUs from './components/Contacts/ContactUs';
import Blog from './components/blog/Blog';
import 'tailwindcss/tailwind.css'
import index from './components/blog'



function App() {
  return (
    <div className="App">

<Router>


      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path = "/ACRepairPage" element={<ACRepairPage />}/>
        <Route path = "/ContactUs" element={<ContactUs />}/>
        <Route path = "/Blog" element={<Blog />}/>
       
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>

    
  );
}

const Home = () => (
  <div>
    <Navbar/>
   <ImageSlider />
<LocationSearch />
<ElectronicsSection />
<Footer />

    {/* Home page content */}
  </div>


);


export default App;

// https://onsitego.com/