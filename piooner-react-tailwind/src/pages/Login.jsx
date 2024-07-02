import { Link, useNavigate } from "react-router-dom";
import { loginUser, fetchUserData } from "../utils/apiService";
import { useState } from "react";
import ErrorModal from "../components/ModelError";

// eslint-disable-next-line react/prop-types
function Login({ textLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Flag for loading state
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true); // Set loading state to true
    setErrorMessage(null); // Clear previous error message

    try {
      const response = await loginUser({ email, password });
      localStorage.setItem("email", email);

      if (response.status === 200) {
        // Login successful
        console.log("Login successful:", response.data.data.token);
        const token = response.data.data.token; // Extract token from response (handle potential absence)
        if (token) {
          localStorage.setItem("token", token); // Store token in local storage
          navigate("/profile"); // Redirect to profile page
        } else {
          setErrorMessage("Login successful, but token missing in response.");
        }
      } else {
        const errorData = await response.json(); // Parse error response for specific message
        setErrorMessage(errorData.message || "Invalid login credentials."); // Display specific or generic error
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again later."); // Generic error for unexpected situations
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <section className="flex flex-col self-center my-auto text-sm w-4/12">
      <div className="self-center text-xl font-bold ">Đăng nhập</div>
      <div className="self-center mt-3">{textLogin}</div>
      <form className="flex flex-col mt-7 w-auto" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold text-center text-gray-800">
          Đăng nhập
        </h3>
        <label htmlFor="emailInput" className="sr-only">
          Email/ Số điện thoại
        </label>
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="email"
          id="emailInput"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passwordInput" className="sr-only">
          Mật khẩu
        </label>
        <input
          className="mt-4 bg-orange-100 h-[49px]"
          type="password"
          id="passwordInput"
          placeholder="Mật khẩu"
          aria-label="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between mt-3 w-full">
          <div>
            <Link to="/register" className="italic mr-12 self-start">
              Đăng ký
            </Link>
          </div>
          <div>
            <Link
              to="/forgot-password"
              className="italic ml-12 w-full self-end"
            >
              Quên mật khẩu?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="justify-center items-center px-16 py-4 mt-2.5 text-base font-bold text-white bg-pioonerCraft max-md:px-5"
        >
          Đăng nhập
        </button>
      </form>
      {errorMessage && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </section>
  );
}

export default Login;
