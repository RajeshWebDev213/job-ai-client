import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import RecruiterDashboard from "./pages/RecuiterDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Profile from "./pages/Profile";
function App() {
  return (
   <>
      {/* <Home/> */}
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/post-job" element={<PostJob />} /> */}
      <Route path="/apply/:id" element={<ApplyJob />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/recruiter-dashboard" element={<RecruiterDashboard />}/>
      <Route path="/student-dashboard" element={<StudentDashboard />}/>
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   </>
  );
}

export default App;