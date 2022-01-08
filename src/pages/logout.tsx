import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { AuthContext } from "../contexts/AuthContext";
import MyInfo from "../components/MyInfo";

function Logout() {
  const { handleLogout } = useContext(AuthContext);

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      <Head>
        <title>Logout | My Favorite Places</title>
      </Head>

      <div className="main">
        <section className="login">
          <h2>Logout...</h2>
        </section>
      </div>
      <MyInfo isAuthenticated={false} />
    </>
  );
}

export default Logout;
