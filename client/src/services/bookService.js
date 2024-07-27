import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/books";

export const getAll = async () => {
  const response = await request.get(baseUrl);

  return await response;
};
