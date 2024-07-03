import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../utils/apiService";
import ErrorModal from "../components/ModelError";
import { RouteMap } from "../utils/assets";
import SuccessModal from "../components/SuccessModel";

function ResetPassword() {
  const [email, setEmail] = useState(""); // Add email state
  const [otp, setOtp] = useState(""); // Add otp state
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail(localStorage.getItem("email"));
    if (!otp || !newPassword || !confirmPassword) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Mật khẩu không khớp.");
      return;
    }
    setIsLoading(true);
    setErrorMessage(null);

    const formData = {
      email,
      otp,
      newPassword,
    };

    console.log("formData reset", formData);

    try {
      const response = await resetPassword(formData);
      if (response.statusCode === 200) {
        setSuccessMessage("Mật khẩu đã được đặt lại vui lòng đăng nhập lại!!!");
      } else {
        setErrorMessage(response.message || "Không thể đặt lại mật khẩu.");
      }
    } catch (error) {
      console.error("Password reset error:", error);
      setErrorMessage("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setSuccessMessage(null);
    localStorage.clear();
    navigate(RouteMap.login);
  };

  return (
    <section className="flex flex-col self-center my-auto text-sm w-4/12 mt-12">
      <div className="self-center text-xl font-bold">Đặt lại mật khẩu</div>
      <form className="flex flex-col mt-7 w-auto" onSubmit={handleSubmit}>
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="text"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="password"
          placeholder="Mật khẩu mới"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          className="mt-2.5 bg-orange-100 h-[49px]"
          type="password"
          placeholder="Xác nhận mật khẩu mới"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="justify-center items-center px-16 py-4 mt-2.5 text-base font-bold text-white bg-pioonerCraft max-md:px-5"
          disabled={isLoading}
        >
          {isLoading ? "Đang xử lý..." : "Đặt lại mật khẩu"}
        </button>
      </form>
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

export default ResetPassword;
