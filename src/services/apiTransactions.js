import { getAuthToken } from "../utils/auth";
import { URL } from "./nodejsAPI";

const storedValue = getAuthToken();

export const getTransactions = async ({page}) => {
  try {
    const response = await fetch(`${URL}/transactions?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
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
        Authorization: `Bearer ${storedValue.token}`,
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

export const getUsersTransactions = async (userId) => {
  try {
    const response = await fetch(
      `${URL}/transactions/users/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedValue.token}`,
        },
      }
    );

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getToDaysTransactions = async () => {
  try {
    const response = await fetch(`${URL}/transactions/today`, {
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
export const getTransaction = async (transactionId) => {
  try {
    const response = await fetch(`${URL}/transactions/${transactionId}`, {
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

export const createTransaction = async ({ transaction }) => {
  try {
    // const response = await fetch(`${URL}/transactions`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${storedValue.token}`,
    //   },
    //   body: JSON.stringify({ ...transaction }),
    // });

    // if (!response.ok) {
    //   console.log(`HTTP Error status: ${response.status}`);
    // }

    // const data = await response.json();

    // return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateTransaction = async (transactionId, transaction) => {
  try {
    const response = await fetch(`${URL}/transactions/${transactionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
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
