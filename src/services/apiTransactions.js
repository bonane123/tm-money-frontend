import { getAuthToken } from "../utils/auth";
import { URL } from "./nodejsAPI";

// Function to get the auth token
const getStoredToken = () => {
  const storedValue = getAuthToken();
  if (!storedValue || !storedValue.token) {
    return null; 
  }
  return storedValue.token;
};

// Call getStoredToken at the beginning of the file
const authToken = getStoredToken();


export const getTransactions = async ({page}) => {
  try {
    const response = await fetch(`${URL}/transactions?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const {data, results: count} = await response.json();
    return {data, count};
  } catch (error) {
    console.log(error);
  }
};

export const getAllTransactions = async () => {
  try {
    const response = await fetch(`${URL}/transactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const {data, results: count} = await response.json();
    return {data, count};
  } catch (error) {
    console.log(error);
  }
};

export const getStatTransactions = async () => {
  try {
    const response = await fetch(`${URL}/transactions/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
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

export const getUsersTransactions = async (userId) => {
  try {
    const response = await fetch(`${URL}/transactions/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
      throw new Error(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};



export const getToDaysTransactions = async () => {
  try {
    const response = await fetch(`${URL}/transactions/today`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
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
export const getTransaction = async (transactionId) => {
  try {
    const response = await fetch(`${URL}/transactions/${transactionId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
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

export const createTransaction = async ({ transaction }) => {
  try {
    const response = await fetch(`${URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ ...transaction }),
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
export const updateTransaction = async (transactionId, transaction) => {
  console.log(transaction, transactionId);
  try {
    const response = await fetch(`${URL}/transactions/${transactionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(transaction),
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
