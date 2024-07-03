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

// Function to sign up a user
// export const sendResetPasswordEmail = async (formData) => {
//   const response = await axios.post(
//     `${apiService}forgot-password`, // Replace with actual signup endpoint
//     formData,
//     {
//       headers: {
//         "Content-Type": "application/json", // Explicitly set for clarity
//       },
//     }
//   );
//   return response;
// };
// Function to sendReset
export const sendResetPasswordEmail = async (formData) => {
  try {
    const response = await axios.post(
      `${apiService}forgot-password`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data; // Return the response data directly
  } catch (error) {
    if (error.response) {
      // If the request was made and the server responded with a status code
      return error.response.data; // Return error response data
    } else {
      // If something else happened while making the request
      throw new Error("An error occurred. Please try again later.");
    }
  }
};

// Function to reset password
export const resetPassword = async (formData) => {
  try {
    const response = await axios.post(`${apiService}reset-password`, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return the response data directly
  } catch (error) {
    if (error.response) {
      // If the request was made and the server responded with a status code
      return error.response.data; // Return error response data
    } else {
      // If something else happened while making the request
      throw new Error("An error occurred. Please try again later.");
    }
  }
};

// Function to fetch user data
export const fetchUserData = async (email) => {
  const response = await axios.get(
    `${apiService}api/User?searchQuery=${email}`
  );
  return response.data.data;
};

// Function to fetch orders get
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
