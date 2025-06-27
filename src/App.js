import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Courses from "./pages/course/Courses";
import CourseDetails from "./pages/course/CourseDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold">My React Site</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
           <Link to="/courses" className="hover:underline">Courses</Link>
          </div>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          &copy; {new Date().getFullYear()} My React Website
        </footer>
      </div>
    </Router>
  );
}

export default App;