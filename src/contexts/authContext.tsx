"use client";

import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface IAuthContext {
  isLoggedIn: boolean;
  username: string | null;
  login: (username: string, password: string) => Promise<unknown>;
  logout: () => void;
  id: string;
  name: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// const token = localStorage.getItem("token");
// const user = localStorage.getItem("user");

export const AuthProvider = ({ children }: any): React.ReactNode => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");
  const [username, setUsername] = useState(user);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`http://localhost:8000/user/login`, {
        email,
        password,
      });
      if (res.status === 401) {
        throw new Error(res.statusText);
      }
      const data = res.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
      setIsLoggedIn(true);
      setUsername(username);
      setId(data.id);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    // setToken("");
    setName("");
    setId("");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, login, logout, id, name }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
