import apiInstance from "../api";

async function getPlaceRequest(slug: string) {
  const { data } = await apiInstance().get(`/places/${slug}`);

  return data;
}

export default getPlaceRequest;
