import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from './logo.svg';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { Works } from './Pages/Works';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
