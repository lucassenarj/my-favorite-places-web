import api from "./api";

async function getPlacesRequest(page = 1) {
  const { data } = await api.get(`/places?pages=${page}`);

  return data;
}

export default getPlacesRequest;
