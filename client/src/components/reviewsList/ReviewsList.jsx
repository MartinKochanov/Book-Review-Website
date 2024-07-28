import { useEffect, useState } from "react";
import * as reviewService from "../../services/reviewsService";

const ReviewsList = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);
  console.log(bookId);

  useEffect(() => {
    reviewService.getAll(bookId).then(setReviews);
  }, [bookId]);
  return (
    <div className="bg-gray-700 mt-8 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">Reviews</h3>
      <ul className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <li
              key={index}
              className="text-gray-300 border-b border-gray-600 pb-4"
            >
              {review.content}
            </li>
          ))
        ) : (
          <p className="text-gray-400">No reviews yet.</p>
        )}
      </ul>
    </div>
  );
};

export default ReviewsList;

// TODO: Make reviews context
