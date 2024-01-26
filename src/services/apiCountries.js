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
  const { name, currency, account } = newCountryData;

  let dataObject = { name, currency };

  if (typeof account === 'string') {
    const dataArray = account.split(',').map(item => item.trim());
    dataObject.account = dataArray;
  } else if (Array.isArray(account)) {
    dataObject.account = account;
  } else {
    dataObject.account = [];
  }
  try {
    const response = await fetch(`${URL}/countries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify(dataObject),
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

  let dataObject;

  if (Array.isArray(account)) {
    dataObject = { account };
  } else if (typeof account === 'string') {
    const dataArray = account.split(',').map(item => item.trim());
    dataObject = { account: dataArray };
  } else {
    dataObject = { account: [] };
  }
  try {
    const response = await fetch(`${URL}/countries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify(dataObject),
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
