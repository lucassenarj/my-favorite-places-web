import React from "react";

function getPhotoThumbnail(photo: string, title: string) {
  return <img src={photo} alt={title} style={{ width: "100%" }} />;
}

export default getPhotoThumbnail;
