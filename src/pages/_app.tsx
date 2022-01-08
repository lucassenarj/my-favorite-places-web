import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthProvider } from "../contexts/AuthContext";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <AuthProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AuthProvider>
);

export default MyApp;
