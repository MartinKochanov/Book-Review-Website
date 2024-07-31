import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/books";

export const getAll = async () => {
  const response = await request.get(baseUrl);

  return await response;
};

export const getById = async (id) => {
  const response = await request.get(`${baseUrl}/${id}`);
  return await response;
};

export const create = async ({
  title,
  cover,
  description,
  author,
  publisher,
  year,
  series,
}) => {
  const response = await request.post(baseUrl, {
    title,
    cover,
    description,
    author,
    publisher,
    year,
    series,
  });
  return await response;
};
