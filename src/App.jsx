import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// Component Imports
import IndexApp from "./components/index.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Notfound from "./components/notfound-404.jsx";
import Sendmail from "./components/sendMsg.jsx";
import Dashboard from "./dashboard.jsx";
import Login from "./login.jsx";
import HomeSection from "./components/Home.jsx"; // ✅ Updated import

// Protected Route
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Optional Button component (if needed)
const Button = ({ isActive }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${isActive ? "bg-blue-500" : "bg-red-500"}`}
    >
      {isActive ? "Active" : "Inactive"}
    </button>
  );
};

export default function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="flex justify-around items-center space-x-4 p-4 bg-gray-800 text-white">
          <h1 className="text-2xl text-green-400 hover:text-blue-400 transition">
            Learn React
          </h1>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-blue-400 hover:underline transition">Home</Link>
            <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
            <Link to="/indexpage" className="hover:text-yellow-300 transition">Index Page</Link>
            <Link to="/about" className="hover:text-green-400 transition">About</Link>
            <Link to="/contact" className="hover:text-pink-400 transition">Contact</Link>
            <Link to="/sendmail" className="hover:text-orange-400 transition">Send Mail</Link>
          </div>
          <button className="text-white rounded-lg px-5 py-2 bg-black hover:bg-gray-50 hover:text-black transition-all">
            Click me
          </button>
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/indexpage" element={<IndexApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sendmail" element={<Sendmail />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
