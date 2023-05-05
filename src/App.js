
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Topbar from './Component/Navbar/Topbar';
import Contact from './Component/Contact/Contact';
import Dashboard from './Component/Login-Register/Dashboard';
import ErrorPage from './Component/404/ErrorPage'
import HeroSection from './Component/Home/HeroSection';
import Services from './Component/Service/Services';
import Skills from './Component/Skills/Skills';
import Project from './Component/Projects/Project';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';


function App() {
  return (
    <>

      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Hero-page" element={<HeroSection />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
