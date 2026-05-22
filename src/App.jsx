import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
   <>
      <Home/>
     {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes> */}
   </>
  );
}

export default App;