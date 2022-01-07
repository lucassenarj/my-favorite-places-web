import Router from "next/router";
import IRegister from "../types/register";
import api from "./api";

async function signUpRequest({
  name,
  email,
  password,
  avatar,
  username,
  bio,
}: IRegister) {
  try {
    const response = await api.post("/users", {
      name,
      email,
      password,
      avatar,
      bio,
      username,
    });

    if (response.status === 200) {
      Router.push("/login");
    }
    throw Error("Error while trying to register, please try again");
  } catch (error) {
    return {
      error: error,
    };
  }
}

export default signUpRequest;
