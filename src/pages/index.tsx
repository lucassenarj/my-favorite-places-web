import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: React.FC<NextPage> = () => (
  <div>
    <Head>
      <title>Next Base Setup</title>
    </Head>

    <main>
      <h1>Index page</h1>
    </main>
  </div>
);

export default Home;
