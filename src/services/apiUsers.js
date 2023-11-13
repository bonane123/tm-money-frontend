import { getAuthToken } from '../utils/auth';
import { URL } from './nodejsAPI';

export const getUser = async () => {
  const storedValue = getAuthToken();

  try {
    const response = await fetch(`${URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${storedValue.token}`,
      },
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
export const getAllUsers = async () => {
  const storedValue = getAuthToken();

  try {
    const response = await fetch(`${URL}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${storedValue.token}`,
      },
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
