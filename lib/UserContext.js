// lib/UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      if (isTokenExpired(token)) {
        logout();
      } else {

        const decodedToken = jwt_decode(token);
        setUser(decodedToken);
      }
    }
    setLoading(false);
  }, []);

  const login = (token, userData) => {
    sessionStorage.setItem('accessToken', token);
    setUser({ ...userData, token });
  };

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    setUser(null);
  };

  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return true;
    };
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);