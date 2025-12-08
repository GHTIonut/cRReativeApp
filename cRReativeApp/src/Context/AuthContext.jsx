/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useState, useEffect } from "react";
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  function logIn(token, userData) {
    setToken(token);
    setUser(userData);
    setLoggedIn(true);
    localStorage.setItem("token", token);
  }

  function logOut() {
    setToken(null);
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  useEffect(() => {
    function checkToken() {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        setUser(null);
        setLoggedIn(true);
      } else {
        setToken(null);
        setUser(null);
        setLoggedIn(false);
      }
    }
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
