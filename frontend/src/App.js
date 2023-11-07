import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing all the pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Nav } from './components/Nav';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';


function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <Nav />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="resources/faq" element={<FAQ />} />
        </Routes>

        {/* footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
