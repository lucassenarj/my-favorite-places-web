/* eslint-disable @typescript-eslint/dot-notation */
import React, { createContext, useEffect, useState } from "react";
import signInRequest from "../services/requests/signInRequest";
import ILogin from "../types/login";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import IUser from "../types/user";
import Router from "next/router";
import IAuthContext from "../types/authContext";
import logoutRequest from "../services/requests/logoutRequest";
import recoverRequest from "../services/requests/recoverRequest";

export const AuthContext = createContext({} as IAuthContext);

type Props = {
  children: any;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<IUser | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "myfavoriteplaces.token": token } = parseCookies();

    if (token) {
      recoverRequest(token).then(response => setUser(response));
    }
  }, []);

  async function handleSignIn({ email, password }: ILogin) {
    const { token, user: userData } = await signInRequest({
      email,
      password,
    });

    setCookie(undefined, "myfavoriteplaces.token", token["access_token"], {
      maxAge: token["expires_in"],
    });

    setUser(userData);

    Router.push("/");
  }

  async function handleLogout() {
    const { "myfavoriteplaces.token": token } = parseCookies();
    await logoutRequest(token);

    setUser(null);
    destroyCookie(null, "myfavoriteplaces.token");

    Router.push("/");
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, handleSignIn, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
