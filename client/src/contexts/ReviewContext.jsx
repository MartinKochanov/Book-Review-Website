import { createContext, useCallback, useState } from "react";

const ReviewContext = createContext();

ReviewContext.displayName = "ReviewContext";

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    const initializeReviews = useCallback((initialReviews) => {
        setReviews(initialReviews);
    }, []);

    const addReviewToState = useCallback((review) => {
        setReviews((r) => [...r, review]);
    }, []);

    const removeReviewFromState = useCallback((id) => {
        setReviews((r) => r.filter((review) => review._id !== id));
    }, []);

    const updateReviewInState = useCallback((id, content) => {
        setReviews((r) =>
            r.map((review) =>
                review._id === id ? { ...review, content: content } : review
            )
        );
    }, []);

    const values = {
        reviews,
        initializeReviews,
        addReviewToState,
        removeReviewFromState,
        updateReviewInState,
    };
    return (
        <ReviewContext.Provider value={values}>
            {children}
        </ReviewContext.Provider>
    );
};

export default ReviewContext;
