import ILogin from "../types/login";
import api from "./api";

async function signInRequest({ email, password }: ILogin) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    if (response.status === 200) {
      const { data } = response;
      return {
        ...data,
      };
    }

    throw Error("Could not login");
  } catch (error) {
    return {
      error: error,
    };
  }
}

export default signInRequest;
