import { getAuthToken } from "../utils/auth";
import { URL } from "./nodejsAPI";

const storedValue = getAuthToken();

export const getReviews = async ({ page }) => {
  try {
    const response = await fetch(`${URL}/reviews?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const { data, results: count } = await response.json();
    return { data, count };
  } catch (error) {
    console.log(error);
  }
};
export const getTopReviews = async () => {
  try {
    const response = await fetch(`${URL}/reviews/topreviews`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.reviews;
  } catch (error) {
    console.log(error);
  }
};

export const createReview = async ({ review, rating, user }) => {
  try {
    const response = await fetch(`${URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify({
        review,
        rating,
        user,
      }),
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateReview = async (newReview) => {
  const {
    id,
    newReviewData: { rating, review },
  } = newReview;
  try {
    const response = await fetch(`${URL}/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify({ rating, review }),
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteReview = async (reviewId) => {
  try {
    const response = await fetch(`${URL}/reviews/${reviewId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      }
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

