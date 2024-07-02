// utils/apiService.jsx
import axios from "axios";

const apiService = "https://exe101pioneer.azurewebsites.net/";
// Function to submit order
export const submitOrder = async (formData) => {
  const response = await axios.post(
    apiService + "api/Order/create-order",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

// Function to login user
export const loginUser = async (loginData) => {
  const response = await axios.post(
    apiService + "login", // Replace with actual login endpoint
    loginData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

// Function to sign up a user
export const signUpUser = async (formData) => {
  const response = await axios.post(
    `${apiService}api/User`, // Replace with actual signup endpoint
    formData,
    {
      headers: {
        "Content-Type": "application/json", // Explicitly set for clarity
      },
    }
  );
  return response;
};

// Function to fetch user data
export const fetchUserData = async (email) => {
  const response = await axios.get(
    `${apiService}api/User?searchQuery=${email}`
  );
  return response.data.data;
};

// Function to fetch orders
export const fetchOrders = async (email) => {
  const response = await axios.get(`${apiService}api/Order/orders/${email}`);
  return response.data;
};

// Function to submit order
export const sendMailOrder = async (email) => {
  const response = await axios.get(
    `${apiService}api/Order/orders/send/${email}`
  );
  return response.data; // Assuming the API returns useful data on success
};
