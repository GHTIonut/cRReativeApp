// import { useState } from 'react'
import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import News from "./pages/News.jsx";
import Test from "./pages/Test.jsx";
import { Profile } from "./pages/Profile.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Test" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}
