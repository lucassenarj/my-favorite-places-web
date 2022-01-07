import api from "./api";

async function getUsersRequest(page = 1) {
  const { data } = await api.get(`/users?pages=${page}`);

  return data;
}

export default getUsersRequest;
