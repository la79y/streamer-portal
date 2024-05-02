import axios from "axios";

const API_URL = "https://161.35.240.211:443";

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
    const response = await axios.post(`${API_URL}/signup`, values);
    return response.data;
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

export const getStreamsList = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/streams-of-streamer`, config);
    return response.data;
  } catch (error) {
    console.error("Error during fetching streams:", error);
    throw error;
  }
};

export const verifyEmail = async (email, token) => {
  try {
    const response = await axios.patch(
      `${API_URL}/verify?email=${email}&token=${token}`
    );
    return response.data;
  } catch (error) {
    console.error("Error during verifying email:", error);
    throw error;
  }
};

export const resetPasswordRequest = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password-request`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error during request changing password:", error);
    throw error;
  }
};

export const resetPassword = async (email, token, newPassword) => {
  try {
    const response = await axios.patch(
      `${API_URL}/reset-password?email=${email}&token=${token}&newPassword=${newPassword}`
    );
    return response.data;
  } catch (error) {
    console.error("Error during changing password:", error);
    throw error;
  }
};
