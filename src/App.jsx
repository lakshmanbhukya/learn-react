import "./App.css";
import IndexApp from "./components/index.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Notfound from "./components/notfound-404.jsx";
import Sendmail from "./components/sendMsg.jsx";
import Dashboard from "./dashboard.jsx";
import Login from "./login.jsx";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : <Navigate to="/login" />;
};
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
        <nav className="flex justify-around items-center space-x-4  p-4 bg-gray-800 text-white ">
          <h1 className="text-2xl text-green-400 hover:text-blue-400 transition ">
            Learn React
          </h1>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-blue-400 hover:text- transition">
              Home
            </Link>
            <Link to="/login" className="hover:text-blue-400 transition">
              Login
            </Link>
            <Link to="/indexpage" className="hover:text-yellow-300 transition">
              Index Page
            </Link>
            <Link to="/about" className="hover:text-green-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-pink-400 transition">
              Contact
            </Link>
            <Link to="/sendmail" className="hover:text-orange-400 transition">
              sendmail
            </Link>
          </div>
          <button className="text-white rounded-lg px-5 py-2  bg-black  hover:bg-gray-50 hover:text-black transition-all">
            Click me{" "}
          </button>
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start invisible and 50px below
              animate={{ opacity: 1, y: 0 }} // Animate to visible and at original position
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            >
              <div className="flex flex-col justify-center items-center h-screen bg-slate-300">
                <h1
                  className="text-black font-bold text-7xl text-opacity-75
               "
                >
                  Welcome to the Home Page!
                </h1>
                <p className="text-black my-5 font-semibold  text-xl text-opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  ducimus.
                </p>
                <div>
                  <button
                    type="button"
                    className="mx-4
             "
                  >
                    Click Me
                  </button>
                  <button type="button">Click Me</button>
                </div>
              </div>
            </motion.div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
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
      </Routes>
    </Router>
  );
}
