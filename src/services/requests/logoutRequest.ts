import api from "../api";

async function logoutRequest(token: string) {
  try {
    const { status } = await api().post(
      "/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return status;
    }

    throw Error("Error when logout");
  } catch (error) {
    return {
      error: error,
    };
  }
}

export default logoutRequest;
