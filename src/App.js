import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ContactDisplay from './Components/ContactDisplay';
import Contact from './Components/Contact';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<ContactDisplay />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    // <Nav />
  );
}

export default App;
