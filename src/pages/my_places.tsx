import Head from "next/head";
import React, { useContext } from "react";
import Place from "../components/Place";
import Sidebar from "../components/Sidebar";
import recoverRequest from "./../services/requests/recoverRequest";
import IPlace from "../types/place";
import { parseCookies } from "nookies";
import { AuthContext } from "../contexts/AuthContext";
import { GetServerSideProps } from "next";

function MyPlaces() {
  const { user } = useContext(AuthContext);
  return (
    user && (
      <>
        <Head>
          <title>{user.name} | My Favorite Places</title>
        </Head>

        <div className="main">
          {user.places &&
            user.places.map((place: IPlace) => {
              const data = Object.assign(
                {},
                { ...place },
                {
                  user: {
                    username: user.username,
                    name: user.name,
                    avatar: user.avatar,
                  },
                }
              );
              return <Place key={place.place_id} {...data} />;
            })}
        </div>
        <Sidebar user={user} />
      </>
    )
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ["myfavoriteplaces.token"]: token } = parseCookies(ctx);

  console.log(parseCookies());
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  await recoverRequest(token, ctx);

  return {
    props: {},
  };
};

export default MyPlaces;
