import api from "./api";

async function recoverRequest(token: string) {
  try {
    const response = await api.post(
      "/auth/me",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      const { data } = response;
      return {
        ...data,
      };
    }
  } catch (error) {
    return {
      error: error,
    };
  }
}

export default recoverRequest;
