
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
function App() {



  return (
    <>
        <div>
            
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
