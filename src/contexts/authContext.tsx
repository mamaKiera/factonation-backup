"use client";

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

export const AuthProvider = ({ children }: any): React.ReactNode => {
  //const token = localStorage.getItem('token')
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // const user = localStorage.getItem('user')
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [username, setUsername] = useState(user);

  const login = async (username: string, password: string) => {
    const loginInfo = { email: username, password };
    try {
      const res = await fetch(`http://localhost:8000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const data = (await res.json()).data;
      if (data.statusCode === 401) {
        throw new Error(data.message);
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", username);
      setIsLoggedIn(true);
      setUsername(username);
      console.log(isLoggedIn);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
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
