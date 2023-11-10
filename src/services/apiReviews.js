import { getAuthToken } from '../utils/auth';
import { URL } from "./nodejsAPI";

const storedValue = getAuthToken();

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
        "Authorization": `Bearer ${storedValue.token}`
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
