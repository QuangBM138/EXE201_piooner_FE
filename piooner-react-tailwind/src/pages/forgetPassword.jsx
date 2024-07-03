import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { sendResetPasswordEmail } from "../utils/apiService";
import ErrorModal from "../components/ModelError";
import { RouteMap } from "../utils/assets";

function ForgotPassword({ textForgotPassword }) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await sendResetPasswordEmail({ email });
      //save email to local
      localStorage.setItem("email", email);
      if (response.statusCode === 200) {
        setSuccessMessage(
          response.message || "Reset password email sent successfully."
        );
        navigate(RouteMap.resetPassword); // Redirect to the reset password page
      } else {
        setErrorMessage(
          response.message || "Failed to send reset password email."
        );
      }
    } catch (error) {
      console.error("Error sending reset password email:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col self-center my-auto text-sm w-4/12">
      <div className="self-center text-xl font-bold">Quên mật khẩu</div>
      <div className="self-center mt-3">{textForgotPassword}</div>
      <form className="flex flex-col mt-7 w-auto" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold text-center text-gray-800">
          Quên mật khẩu
        </h3>
        <label htmlFor="emailInput" className="sr-only">
          Email
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
        <button
          type="submit"
          className="justify-center items-center px-16 py-4 mt-2.5 text-base font-bold text-white bg-pioonerCraft max-md:px-5"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Gửi email"}
        </button>
      </form>
      {successMessage && (
        <div className="mt-3 text-green-600">{successMessage}</div>
      )}
      {errorMessage && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
    </section>
  );
}

export default ForgotPassword;
