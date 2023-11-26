import { getAuthToken } from "../utils/auth";
import { URL } from "./nodejsAPI";

const storedValue = getAuthToken();

export const getAllCharges = async () => {
  try {
    const response = await fetch(`${URL}/charges`, {
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
    return data.data.charges;
  } catch (error) {
    console.log(error);
  }
};

export const createCharge = async (newCharge) => {
  const {
    newChargeData: { maxAmount, minAmount, chargePercentage },
  } = newCharge;

  try {
    const response = await fetch(`${URL}/charges`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify({ minAmount, maxAmount, chargePercentage }),
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

export const updateCharge = async (newCharge) => {
  const {
    newChargeData: { id, maxAmount, minAmount, chargePercentage },
  } = newCharge;

  try {
    const response = await fetch(`${URL}/charges/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
      body: JSON.stringify({ minAmount, maxAmount, chargePercentage }),
    });

    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteCharge = async (id) => {
  try {
    const response = await fetch(`${URL}/charges/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${storedValue.token}`,
      },
    });
    if (!response.ok) {
      console.log(`HTTP Error status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};
