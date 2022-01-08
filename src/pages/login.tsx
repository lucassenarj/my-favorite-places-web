import Head from "next/head";
import React from "react";
import SignIn from "../components/SignIn";
import MyInfo from "../components/MyInfo";

function Login() {
  return (
    <>
      <Head>
        <title>Login | My Favorite Places</title>
      </Head>

      <div className="main">
        <section className="login">
          <h3>Sign In</h3>
          <SignIn />
        </section>
      </div>
      <MyInfo isAuthenticated={false} />
    </>
  );
}

export default Login;
