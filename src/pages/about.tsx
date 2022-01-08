import Head from "next/head";
import React from "react";

function Login() {
  return (
    <>
      <Head>
        <title>About | My Favorite Places</title>
      </Head>

      <div className="main">
        <section className="login">
          <h3>About My Favorite Places</h3>
          <p>
            My Favorite Places was born as a study project in 2017 using the
            Ionic Framework. The projects initial idea was to create an
            application allowing the users to save and list their favorite spots
            using geolocation from their device.
          </p>
          <p>
            The idea of creating a social network based on the project came in
            2021. For the Frontend, was chosen NextJS. The backend was written
            in PHP using a framework called Laravel. The mobile app has been
            created using React-Native.
          </p>
        </section>
      </div>
    </>
  );
}

export default Login;
