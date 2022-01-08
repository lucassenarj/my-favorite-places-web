import api from "../api";

async function getUserRequest(username: string) {
  const { data } = await api().get(`/users/${username}`);

  return data;
}

export default getUserRequest;
