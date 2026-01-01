/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useState, useEffect, useRef } from "react";
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const inactivityTimer = useRef(null);

  function logIn(token, userData) {
    setToken(token);
    setUser(userData);
    setLoggedIn(true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    startActivityListeners();
  }

  function logOut() {
    setToken(null);
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    stopActivityListeners();
  }

  function resetTimer() {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }

    inactivityTimer.current = setTimeout(() => {
      logOut();
      alert("You have been logged out for inactivty.");
    }, 5 * 60 * 1000);
  }

  function startActivityListeners() {
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    resetTimer();
  }

  function stopActivityListeners() {
    window.removeEventListener("mousemove", resetTimer);
    window.removeEventListener("keydown", resetTimer);
    window.removeEventListener("click", resetTimer);
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        setLoggedIn(true);
        startActivityListeners();
      } catch {
        console.error("Invalid user JSON:", storedUser);
        localStorage.removeItem("user");
        setUser(null);
        setLoggedIn(false);
      }
    }
    return () => stopActivityListeners();
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
