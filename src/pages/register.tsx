import Head from "next/head";
import React from "react";
import SignUp from "../components/SignUp";
import MyInfo from "../components/MyInfo";

function Register() {
  return (
    <>
      <Head>
        <title>Login | My Favorite Places</title>
      </Head>

      <div className="main">
        <section className="login">
          <h3>Sign Up</h3>
          <SignUp />
        </section>
      </div>
      <MyInfo isAuthenticated={false} />
    </>
  );
}

export default Register;
