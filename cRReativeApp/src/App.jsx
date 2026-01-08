// import { useState } from 'react'
import "./App.css";
import NavBar from "./Components/NavBar";
// import SideBar from "./Components/SideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import News from "./pages/News.jsx";
import { Profile } from "./pages/Profile.jsx";
import Footer from "./Components/Footer.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Horoscope from "./pages/Horoscope.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Horoscope" element={<Horoscope />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
