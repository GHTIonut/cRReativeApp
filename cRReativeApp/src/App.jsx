import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import News from "./pages/News.jsx";
import { Profile } from "./pages/Profile.jsx";
import PersonalInfoWindow from "./profilePages/PersonalInfo.jsx";
import Footer from "./Components/Footer.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Horoscope from "./pages/Horoscope.jsx";
import ProtectedRouteProfile from "./protected routes/protectedRoute.jsx";
import ResetPasswordWindow from "./profilePages/resetPassword.jsx";
import ProtectedRouteGuest from "./protected routes/protectedGuest.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route
          path="/Login"
          element={
            <ProtectedRouteGuest>
              <LogIn />
            </ProtectedRouteGuest>
          }
        />
        <Route
          path="/SignUp"
          element={
            <ProtectedRouteGuest>
              <SignUp />
            </ProtectedRouteGuest>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRouteProfile>
              <Profile />
            </ProtectedRouteProfile>
          }
        />
        <Route
          path="/PersonalInfo"
          element={
            <ProtectedRouteProfile>
              <PersonalInfoWindow />
            </ProtectedRouteProfile>
          }
        ></Route>

        <Route
          path="/ChangePassword"
          element={
            <ProtectedRouteProfile>
              <ResetPasswordWindow />
            </ProtectedRouteProfile>
          }
        ></Route>

        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/Horoscope" element={<Horoscope />} />
        <Route path="/ResetPassword" element={<ResetPasswordWindow />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
