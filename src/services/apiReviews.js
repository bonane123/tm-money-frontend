// import { getAuthToken } from '../utils/auth';
import { URL } from './nodejsAPI';

export const getTopReviews = async () => {
  // const storedValue = getAuthToken();

  try {
    const response = await fetch(`${URL}/reviews/topreviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
