import Image from "next/image";
import React from "react";
import Pic01 from "../assets/images/pic01.jpg";

function getPlaceThumbnail({
  title,
  thumbnail,
}: {
  title: string;
  thumbnail: string | undefined;
}): JSX.Element {
  if (!thumbnail) {
    return <Image src={Pic01} alt={title} />;
  }
  return <img src={thumbnail} alt={title} style={{ width: "100%" }} />;
}

export default getPlaceThumbnail;
