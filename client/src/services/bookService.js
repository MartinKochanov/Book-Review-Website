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

export const create = async (values) => {
    const response = await request.post(baseUrl, {
        title: values.title,
        cover: values.cover,
        description: values.description,
        author: values.author,
        publisher: values.publisher,
        year: values.year,
        series: values.series,
    });
    return await response;
};

export const updateBook = async (id, values) => {
    const response = await request.put(`${baseUrl}/${id}`, {
        title: values.title,
        cover: values.cover,
        description: values.description,
        author: values.author,
        publisher: values.publisher,
        year: values.year,
        series: values.series,
    });

    return await response;
};

export const deleteBook = async (id) => {
    const response = await request.remove(`${baseUrl}/${id}`, id);

    return await response;
};
