import { getAuthToken } from "../utils/auth";
import { URL } from "./nodejsAPI";

const storedValue = getAuthToken();

export const getTransactions = async () => {
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

    const data = await response.json();
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
export const getTransaction = async (TransactionId) => {
  try {
    const response = await fetch(`${URL}/transactions/${TransactionId}`, {
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
    console.log(transaction)
  try {
    const response = await fetch(`${URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify({...transaction}),
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
export const updateTransaction = async ( transactionId, {...transaction }) => {
  const dataToUpdate = {
    id: transactionId,
    data: {...transaction},
  };
  console.log(transactionId)
  try {
    const response = await fetch(`${URL}/transactions/${transactionId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify(dataToUpdate),
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)

    return data;
  } catch (error) {
    console.log(error);
  }
};
