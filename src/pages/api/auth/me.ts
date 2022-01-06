import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const token = req.headers.authorization;

    const API_PATH = "http://backend.my_favorite_places.dev.local/api/v0";
    try {
      const response = await fetch(`${API_PATH}/auth/me`, {
        method: "POST",
        headers: {
          Authorization: token ? token : "",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response);
        const result = await response.json();
        return res.status(200).json(result);
      }
      throw Error("user not found");
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
