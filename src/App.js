import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/HeaderBar";
import Home from "./pages/Home";
import Courses from "./pages/course/Courses";
import CourseDetails from "./pages/course/CourseDetails";
import Instructor from "./pages/instructor/Instructor";
import InstructorDetails from "./pages/instructor/InstructorDetails";
import Learner from "./pages/learner/LearnerPage";
import Contacts from "./pages/Contacts";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/instructor/:id" element={<InstructorDetails />} />
        <Route path="/learner" element={<Learner />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/course/:id" element={<CourseDetails />} />
        
      </Routes>
    </BrowserRouter>
  );

}
export default App;


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50 text-gray-900">
//         <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
//           <h1 className="text-xl font-bold">My React Site</h1>
//           <div className="space-x-4">
//             <Link to="/" className="hover:underline">Home</Link>
//             <Link to="/signup" className="hover:underline">Signup</Link>
//            <Link to="/courses" className="hover:underline">Courses</Link>
//           </div>
//         </nav>

//         <main className="p-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/courses" element={<Courses />} />
//             <Route path="/courses/:id" element={<CourseDetails />} />
//           </Routes>
//         </main>

//         <footer className="bg-gray-800 text-white text-center py-4 mt-8">
//           &copy; {new Date().getFullYear()} My React Website
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;