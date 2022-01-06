import { NextApiRequest, NextApiResponse } from "next";
import api from "./../../../services/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const page = req.query.page ? req.query.page : 1;

    try {
      const response = await api.get(`/places?pages=${page}`);
      console.log(response);

      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(401).json(error);
    }
  }
}
