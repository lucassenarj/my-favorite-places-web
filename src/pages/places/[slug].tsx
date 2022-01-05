import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import IPlace from "../../types/place";
import generateSlug from "../../helpers/generateSlug";
import Head from "next/head";
import Details from "../../components/Details";

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
  const response = await fetch(`http://localhost:3000/api/places?page=1`);
  const places = await response.json();

  const paths = places.map(({ title }: { title: string }) => {
    return {
      params: {
        slug: generateSlug(title),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const slug = context.params?.slug;

  const response = await fetch(
    `http://localhost:3000/api/places/place?slug=${slug}`
  );
  const place = await response.json();

  return {
    props: {
      place,
    },
  };
};

export default PlaceDetails;
