import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/HeaderBar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Courses from "./pages/course/Courses";
import CourseDetails from "./pages/course/CourseDetails";
import Instructor from "./pages/instructor/Instructor";
import InstructorDetails from "./pages/instructor/InstructorDetails";
import Signup from "./pages/account/Signup";
import BecomeInstructor from "./pages/BecomeInstructor";
import ParticipantDetails from "./pages/participant/ParticipantDetails";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        {/* <Route path="/instructor" element={<Instructor />} /> */}
        <Route element={<ProtectedRoute allowedTypes={["instructor"]} />}>
          <Route path="/instructor/:id" element={<InstructorDetails />} />
        </Route>
        <Route element={<ProtectedRoute allowedTypes={["participant"]} />}>
          <Route path="/participant/:id" element={<ParticipantDetails />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/instructor-signup" element={<BecomeInstructor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
