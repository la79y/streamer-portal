import axios from "axios";

const API_URL = "http://localhost:3000";

export const loginUser = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/login`, values);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const signupUser = async (values) => {
  try {
    await axios.post(`${API_URL}/signup`, values);
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const createStream = async (values) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/stream`, values, config);
    return response.data;
  } catch (error) {
    console.error("Error during stream creation:", error);
    throw error;
  }
};
