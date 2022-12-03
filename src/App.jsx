import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Router, Route, Routes } from "react-router";
import { useNavigate, Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { UserProvider } from "./Components/usercontext";
import Booking from "./Pages/Booking";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Movies from "./Pages/Movies";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { MovieDetails } from "./Pages/MovieDetails";
import Notfound from "./Pages/Notfound";
import AdminAccess from "./Pages/AdminAccess";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/admin" element={<AdminAccess />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
