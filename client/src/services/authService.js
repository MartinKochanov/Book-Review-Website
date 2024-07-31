import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  return request.post(`${baseUrl}/login`, {
    email,
    password,
  });
};

export const register = async (email, password) => {
  return request.post(`${baseUrl}/register`, {
    email,
    password,
    role: "USER",
  });
};

export const logout = async () => {
  request.get(`${baseUrl}/logout`);
};
