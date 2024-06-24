// utils/apiService.js
import axios from "axios";

const apiService = "https://localhost:7030/api/";
// Function to submit order
export const submitOrder = async (formData) => {
  const response = await axios.post(apiService + "Order", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};
