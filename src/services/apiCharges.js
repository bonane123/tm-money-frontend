import { getAuthToken } from '../utils/auth';
import { URL } from "./nodejsAPI";

const storedValue = getAuthToken();

export const getAllCharges = async () => {
  try {
    const response = await fetch(`${URL}/charges`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${storedValue.token}`
      },
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.charges;
  } catch (error) {
    console.log(error);
  }
};