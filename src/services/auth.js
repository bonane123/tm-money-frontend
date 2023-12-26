// import { getAuthToken } from '../utils/auth';
import { URL } from "./nodejsAPI";
// import Cookies from 'js-cookie';

// LOGIN API
export const login = async ({ email, password }) => {
  try {
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
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

export const googleAuth = async (credentialResponse) => {
  try {
    console.log(credentialResponse)
    const response = await fetch(`${URL}/users/google_auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credentialResponse,
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

// SIGN UP API
export const signup = async ({
  fullName,
  email,
  password,
  passwordConfirm,
}) => {
  try {
    const response = await fetch(`${URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        passwordConfirm,
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
