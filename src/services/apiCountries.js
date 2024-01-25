import { getAuthToken } from "../utils/auth";
import { URL } from "./nodejsAPI";

const storedValue = getAuthToken();
export const getAllCountries = async () => {
  try {
    const response = await fetch(`${URL}/countries`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

export const createCountry = async (newCountryData) => {

  try {
    const response = await fetch(`${URL}/countries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify(newCountryData),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Failed to create country: ${error.message}`);
  }
};

export const updateCountries = async (countryData) => {
  const {
    id,
    newCountryData: { account },
  } = countryData;

  try {
    const response = await fetch(`${URL}/countries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify({ account }),
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
