import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/reviews";

export const getAll = async (bookId) => {
  const query = new URLSearchParams({
    where: `bookId="${bookId}"`,
  });
  const result = await request.get(`${baseUrl}?${query}`);

  return result;
};
