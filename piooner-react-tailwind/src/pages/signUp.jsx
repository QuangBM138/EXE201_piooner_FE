import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../utils/apiService";
import { useState } from "react";
import ErrorModal from "../components/ModelError";
import SuccessModal from "../components/SuccessModel"; // Import SuccessModal
import { RouteMap } from "../utils/assets";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Add success message state
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await signUpUser(formData);
      if (response.status === 200) {
        console.log("Sign up successful");
        setSuccessMessage("Đăng ký thành công vui lòng đăng nhập lại!!!"); // Set success message
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Sign up failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setSuccessMessage(null);
    navigate(RouteMap.login);
  };

  return (
    <section className="flex flex-col self-center my-auto text-sm w-4/12 mt-20">
      <div className="self-center text-xl font-bold">Đăng ký</div>
      <form className="flex flex-col mt-7 w-auto" onSubmit={handleSubmit}>
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="text"
          name="address"
          placeholder="Địa chỉ"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="tel"
          name="phoneNumber"
          placeholder="Số điện thoại"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="justify-center items-center px-16 py-4 mt-2.5 text-base font-bold text-white bg-pioonerCraft max-md:px-5"
          disabled={isLoading}
        >
          {isLoading ? "Đang xử lý..." : "Đăng ký"}
        </button>
      </form>
      <div className="mt-3 text-center">
        <Link to={RouteMap.login} className="italic">
          Đã có tài khoản? Đăng nhập
        </Link>
      </div>
      {errorMessage && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
      {successMessage && (
        <SuccessModal message={successMessage} onClose={handleSuccessClose} />
      )}
    </section>
  );
}

export default SignUp;
