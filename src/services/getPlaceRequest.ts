import api from "./api";

async function getPlaceRequest(slug: string) {
  const { data } = await api.get(`/places/${slug}`);

  return data;
}

export default getPlaceRequest;
