import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Place from "../components/Place";

const Home: React.FC<NextPage> = () => (
  <>
    <Head>
      <title>Next Base Setup</title>
    </Head>

    <Place id="magna-sed-adipiscing" title="Magna sed adipiscing" />
    <Place id="mauris-neque-quam" title="Mauris Neque Quam" />
    <Place id="fermentum-ut-nisl-vitae" title="Fermentum ut nisl Vitar" />
    <Place id="consequant-etiam-feugiat" title="Consequat Etiam Feugiat" />
  </>
);

export default Home;
