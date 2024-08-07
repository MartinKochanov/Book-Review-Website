import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/reviews";

export const getAll = async (bookId) => {
    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
    });
    const result = await request.get(`${baseUrl}?${query}`);
    return result;
};

export const addReview = async (bookId, auth, values) => {
    const response = request.post(baseUrl, {
        _ownerId: auth._id,
        ownerName: auth.email,
        content: values.content,
        bookId: bookId,
    });
    return await response;
};

export const editReview = async (bookId, auth, id, values) => {
    const response = await request.put(`${baseUrl}/${id}`, {
        ownerId: auth._id,
        ownerName: auth.email,
        content: values.content,
        bookId: bookId,
    });

    return await response;
};

export const deleteReview = async (reviewId) => {
    const response = await request.remove(`${baseUrl}/${reviewId}`);

    return await response;
};
