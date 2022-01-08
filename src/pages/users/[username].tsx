import React from "react";
import { GetStaticPaths } from "next";
import Head from "next/head";
import IUser from "../../types/user";
import Place from "../../components/Place";
import IPlace from "../../types/place";
import Sidebar from "../../components/Sidebar";
import getUserRequest from "../../services/requests/getUserRequest";
import getUsersRequest from "../../services/requests/getUsersRequest";

type Props = {
  user: IUser;
};

function PlaceDetails({ user }: Props) {
  return (
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
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getUsersRequest();
  const users = data;

  const paths = users.map(({ username }: { username: string }) => {
    return {
      params: {
        username,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

type Params = {
  params: {
    username: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { username } = params;

  const user = await getUserRequest(username);

  return {
    props: {
      user,
    },
  };
};

export default PlaceDetails;
