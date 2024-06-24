// utils/apiService.js
import axios from "axios";

const apiService = "https://exe101pioneer.azurewebsites.net/api/";
// Function to submit order
export const submitOrder = async (formData) => {
  const response = await axios.post(
    apiService + "Order/create-order",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
