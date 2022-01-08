import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Place from "../components/Place";
import IPlace from "../types/place";
import MyInfo from "../components/MyInfo";
import { AuthContext } from "../contexts/AuthContext";
import IUser from "../types/user";
import getPlacesRequest from "../services/requests/getPlacesRequest";

type Props = {
  places: IPlace[];
};

function Home({ places }: Props) {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useState<IUser | null>(null);

  useEffect(() => {
    if (user) {
      setAuth(user);
      setIsAuth(isAuthenticated);
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <Head>
        <title>My Favorite Places</title>
      </Head>

      <div className="main">
        {places.map((place: IPlace, index: number) => (
          <Place key={index} {...place} />
        ))}
      </div>
      <MyInfo isAuthenticated={isAuth} user={auth} />
    </>
  );
}

export async function getStaticProps() {
  let places;
  try {
    const { data } = await getPlacesRequest();
    places = data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      places,
    },
    revalidate: 10,
  };
}

export default Home;
