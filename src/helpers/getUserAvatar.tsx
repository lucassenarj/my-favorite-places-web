import React from "react";
import Image from "next/image";
import Avatar from "../assets/images/avatar.jpg";

function getUserAvatar(title: string, avatar = ""): JSX.Element {
  if (!avatar) {
    return <Image src={Avatar} alt={title} />;
  }
  return <img src={avatar} alt={title} />;
}

export default getUserAvatar;
