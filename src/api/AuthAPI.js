// src/UserAPI.js
import { AuthClient, authCall } from "./config";

const AuthAPI = {
  // login: ({ email, password }) =>
  //   AuthClient.post(`/sign-in`, { user: { email, password } }),

  login: ({ email, password }) => {
    const credentials = btoa(`${email}:${password}`); // Base64 encode email and password
    return AuthClient.post(
      `/sign-in`,
      {},
      {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      },
    );
  },
  refreshToken: () => AuthClient.post(`/refresh-token`),
};

export default AuthAPI;
