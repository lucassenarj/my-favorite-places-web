import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import React from "react";

type IPlaceDetails = {
  id: string;
  title: string;
};

function PlaceDetails({ id, title }: IPlaceDetails) {
  return (
    <section>
      <h1>{title}</h1>
      <h6>{id}</h6>
    </section>
  );
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  const { placeId } = params;

  return {
    props: {
      id: placeId,
      title: "Some title",
    },
  };
}

export function getStaticPaths(): GetStaticPathsResult {
  const allowed = [
    "magna-sed-adipiscing",
    "mauris-neque-quam",
    "fermentum-ut-nisl-vitae",
    "consequant-etiam-feugiat",
  ];

  return {
    paths: allowed.map((allow: string) => ({ params: { placeId: allow } })),
    fallback: false,
  };
}

export default PlaceDetails;
