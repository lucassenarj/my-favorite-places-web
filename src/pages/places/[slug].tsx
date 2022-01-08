import React from "react";
import { GetStaticPaths } from "next";
import IPlace from "../../types/place";
import Head from "next/head";
import Details from "../../components/Details";
import getPlaceRequest from "../../services/requests/getPlaceRequest";
import getPlacesRequest from "../../services/requests/getPlacesRequest";

type Props = {
  place: IPlace;
};

function PlaceDetails({ place }: Props) {
  return (
    <>
      <Head>
        <title>{place.title} | My Favorite Places</title>
      </Head>

      <div className="main">
        <Details {...place} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getPlacesRequest();

  const places = data;

  const paths = places.map(({ slug }: { slug: string }) => {
    return {
      params: {
        slug,
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
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;

  const place = await getPlaceRequest(slug);

  return {
    props: {
      place,
    },
  };
};

export default PlaceDetails;
