"use client";

import { host } from "@/types";
import axios from "axios";
import router from "next/router";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface IAuthContext {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<unknown>;
  logout: (token: string) => void;
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// const token = localStorage.getItem("token");
// const user = localStorage.getItem("user");

export const AuthProvider = ({ children }: any): React.ReactNode => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${host}/user/login`, {
        email,
        password,
      });

      if (res.status === 401) {
        throw new Error(res.statusText);
      }
      const data = res.data.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
      localStorage.setItem("id", data.id);
      setIsLoggedIn(true);
      setEmail(data.email);
      setId(data.id);
      setName(data.name);
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const logout = async (token: string) => {
    try {
      const res = await fetch(`${host}/user/auth/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      // setToken("");
      setName("");
      setId("");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      setEmail("");

      if (res.status > 400) {
        throw new Error(res.statusText);
      }
      console.log(`logging out`);
      //router.push("/");
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, id, name, email }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
