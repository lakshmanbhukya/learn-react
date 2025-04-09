import "./App.css";
import IndexApp from "./components/index.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{padding: 10,marginBottom: 20,textAlign:"center",backgroundColor:"#f4f6f6" }}>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/indexpage" style={{ marginRight: "10px" }}>
            Index Page
          </Link>
          <Link to="/about" style={{ marginRight: "10px" }}>
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 style={{fontSize:45,textAlign:"center"}}>Welcome to the Home Page!</h1>
            </div>
          }
        />
        <Route path="/indexpage" element={<IndexApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
