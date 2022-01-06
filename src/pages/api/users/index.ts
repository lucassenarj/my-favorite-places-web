import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const page = req.query.page ? req.query.page : 1;

    const API_PATH = "http://backend.my_favorite_places.dev.local/api/v0";
    try {
      const response = await fetch(`${API_PATH}/users?pages=${page}`);
      const result = await response.json();

      return res.status(200).json(result.data);
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
