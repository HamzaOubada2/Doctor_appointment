import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (token) => {
    try {
      localStorage.setItem("token", token);
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
