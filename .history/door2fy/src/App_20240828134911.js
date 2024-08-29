import Navbar from './components/Navbar/Navbar';
import './App.css';
import ImageSlider from './components/Slider/ImageSlider';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import LocationSearch from './components/location/LocationSearch';
import ElectronicsSection  from './components/ElectronicSection/ElectronicsSection';
import Footer from './components/Footer/Footer';
import SignIn from './components/Signin/SignIn';
import ACRepairPage from './components/Service/ACRepairPage';
import ContactUs from './components/Contacts/ContactUs';
import Blog from './components/blog/Blog';
import PostDetail from './components/blog/PostDetail';
import 'tailwindcss/tailwind.css'




function App() {
  return (
    <div className="App">

<Router>


      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path = "/ac-repairPage" element={<ACRepairPage />}/>
        <Route path = "/contactUs" element={<ContactUs />}/>
        <Route path = "/blog" element={<Blog />}/>
        <Route path="/post/:slug" element={<PostDetailsPage />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 pages */}
       
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