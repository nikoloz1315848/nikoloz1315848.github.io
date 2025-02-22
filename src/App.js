
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Contact from './components/contact';
import AboutUs from './components/aboutUs';
import Home from './components/home';
import Blog from './components/blog';
import Training from './components/training';
import Consulting from './components/consulting';
import UsefulLinks from './components/usefulLinks';
import TermsOfUse from './components/termsOfUse';
import Faq from './components/faq';
import PrivacyPolicy from './components/PrivacyPolicy';
import backgroundPic from './components/data/backgroundPic.jpg';
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {

  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Initialize Scrollspy manually after the page has loaded
    const scrollSpyElement = document.getElementById("navbar");
    if (scrollSpyElement && window.bootstrap) {
      new window.bootstrap.ScrollSpy(scrollSpyElement, {
        target: '#navbar'
      });
    }

    window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <>
        <div style={{backgroundColor: '#F0F0F0',fontFamily: 'arial', color: '#003968'}}>
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/aboutus"
                        element={<AboutUs />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="/blog"
                        element={<Blog />}
                    />
                    <Route
                        path="/training"
                        element={<Training />}
                    />
                    <Route
                        path="/consulting"
                        element={<Consulting />}
                    />
                    <Route
                        path="/usefulLinks"
                        element={<UsefulLinks />}
                    />
                    <Route
                        path="/termsOfUse"
                        element={<TermsOfUse />}
                    />
                    <Route
                        path="/privacyPolicy"
                        element={<PrivacyPolicy />}
                    />
                    <Route
                        path="/faq"
                        element={<Faq />}
                    />
                    
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
            </div>
            
        </>
  );
}

export default App;
