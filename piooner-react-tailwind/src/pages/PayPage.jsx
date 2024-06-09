import { useEffect, useState } from "react";
import Stepper from "../components/steeper";
import { useNavigate } from "react-router-dom";
import { RouteMap as RM, img } from "../utils/assets";

// eslint-disable-next-line react/prop-types
function ImageWithDescription({ src, alt, onClick }) {
  return (
    <div className="flex gap-4 mt-14 ml-4 max-md:mt-10 max-md:ml-2.5">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 aspect-square w-[35px] cursor-pointer"
        onClick={onClick}
      />
      <div className="flex-auto my-auto">
        <span>Giỏ hàng/ </span>
        <span className="text-amber-700">Thanh toán</span>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function InputField({ id, label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col grow text-sm text-black max-md:mt-10">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-label={label}
        className="mt-2.5 bg-orange-100 h-[49px]"
      />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function RadioButton({ label, value, checked, onChange }) {
  return (
    <div className="flex gap-3.5">
      <input
        type="radio"
        className="shrink-0 w-5 h-5 bg-orange-100 rounded-full"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <div className="flex-auto my-auto">{label}</div>
    </div>
  );
}

// Modal component
// eslint-disable-next-line react/prop-types
// Modal component
// eslint-disable-next-line react/prop-types
const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[60%] max-w-[600px] p-10 bg-white rounded-lg shadow-lg">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {message}
            </h3>
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export function PayPage() {
  const isActive = [false, false, true];
  const [cartData, setcartData] = useState({});
  const [sltedOpMove, setSltedOpMove] = useState("GHTK");
  const [sltedOpPay, setSltedOpPay] = useState("delivery");
  const navigate = useNavigate();
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const shippingMethod = { GHTK: "GHTK", GHN: "GHN" };

  const payMethod = {
    delivery: "delivery",
    momo: "momo",
  };

  const shippingFees = {
    [shippingMethod.GHTK]: 15000, // Fee for GHTK
    [shippingMethod.GHN]: 30000, // Fee for GHN
  };

  const handleOptionChangeShipping = (event) => {
    setSltedOpMove(event.target.value);
  };
  const handleOptionChangePayment = (event) => {
    setSltedOpPay(event.target.value);
  };

  const calculateTotal = () => {
    let total = cartData.totalPrice || 0;
    total += shippingFees[sltedOpMove] || 0; // Add shipping fee based on selected method
    return total;
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartData");
    if (storedCartItems) {
      setcartData(JSON.parse(storedCartItems));
    }
    console.log("localStorage", localStorage);
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form input values
    const lastName = document.getElementById("lastName").value;
    const firstName = document.getElementById("firstName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const district = document.getElementById("district").value;
    const ward = document.getElementById("ward").value;
    const address = document.getElementById("address").value;
    const note = document.getElementById("note").value;

    // Perform form validation
    if (
      !lastName ||
      !firstName ||
      !phoneNumber ||
      !email ||
      !city ||
      !district ||
      !ward ||
      !address
    ) {
      setErrorMessage("Please fill in all required fields.");
      setErrorModalOpen(true);
      return;
    }

    // Validate email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setErrorModalOpen(true);
      return;
    }

    // Prepare form data
    const formData = {
      lastName,
      firstName,
      phoneNumber,
      email,
      city,
      district,
      ward,
      address,
      note,
      shippingMethod: sltedOpMove,
      paymentMethod: sltedOpPay,
      totalPrice: calculateTotal(),
    };

    console.log("formData", formData);
    navigate(RM.nearOrderPage);
    // Send form data to your API using fetch or Axios library
    // const response = await fetch(/* Your API endpoint */, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   // Handle successful response
    //   console.log("Order submitted successfully:", response);
    //   navigate(RM.nearOrderPage); // Redirect to "nOrder" page
    // } else {
    //   // Handle failed response (e.g., display error message)
    //   console.error("Error submitting order:", response);
    //   //... display error message logic
    // }
  };

  const handleCloseErrorModal = () => {
    setErrorModalOpen(false);
  };

  return (
    <section className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col grow items-start mr-auto text-xl text-amber-700 max-md:mt-10">
        <ImageWithDescription
          src={img.backbutton}
          alt="back"
          onClick={handleBackClick}
        />
      </div>
      <Stepper isActive={isActive} />
      <hr className="shrink-0 mt-16 max-w-full h-px bg-black border border-black border-solid w-[1156px] max-md:mt-10" />
      <div className="flex gap-5 justify-between mt-5 w-full max-w-[1156px] max-md:flex-wrap max-md:max-w-full">
        <form
          className="flex flex-col self-start mt-16 max-md:mt-10 max-md:max-w-full"
          onSubmit={handleFormSubmit}
        >
          <h2 className="self-center text-xl font-bold text-black">
            Thông tin giao hàng
          </h2>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <InputField id="lastName" label="Họ" placeholder="Họ" />
                <InputField
                  id="phoneNumber"
                  label="Số điện thoại"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <InputField id="firstName" label="Tên" placeholder="Tên" />
                <InputField
                  id="email"
                  type="email"
                  label="Địa chỉ Email"
                  placeholder="Địa chỉ Email"
                />
              </div>
            </div>
            <InputField
              id="city"
              label="Tỉnh/Thành phố"
              placeholder="Tỉnh/Thành phố"
            />
            <InputField
              id="district"
              label="Quận/Huyện"
              placeholder="Quận/Huyện"
            />
            <InputField id="ward" label="Phường/Xã" placeholder="Phường/Xã" />
            <InputField id="address" label="Địa chỉ" placeholder="Địa chỉ" />
            <button
              type="submit"
              className="justify-center items-center self-center px-16 py-4 mt-12 max-w-full text-xl font-bold text-center text-white bg-pioonerCraft w-[387px] max-md:px-5 max-md:mt-10"
            >
              Xác nhận
            </button>
          </div>
        </form>
        <hr className="shrink-0 w-px  bg-black border border-black border-solid h-[795px]" />
        <div className="flex flex-col my-auto max-md:max-w-full">
          <h2 className="self-center text-xl font-bold text-center text-black">
            Hình thức thanh toán
          </h2>
          <h3 className="mt-10 text-sm font-bold text-black max-md:max-w-full">
            Phương thức vận chuyển
          </h3>
          <div className="flex gap-5 justify-between mt-6 text-sm text-black max-md:flex-wrap">
            <RadioButton
              label="Giao Hàng Tiết Kiệm"
              value={shippingMethod.GHTK}
              checked={sltedOpMove === shippingMethod.GHTK}
              onChange={handleOptionChangeShipping}
            />
            <RadioButton
              label="Giao Hàng Nhanh"
              value={shippingMethod.GHN}
              checked={sltedOpMove === shippingMethod.GHN}
              onChange={handleOptionChangeShipping}
            />
          </div>
          <h3 className="mt-7 text-sm font-bold text-black max-md:max-w-full">
            Phương thức thanh toán
          </h3>
          <RadioButton
            label="Thanh toán khi nhận hàng"
            value={payMethod.delivery}
            checked={sltedOpPay === payMethod.delivery}
            onChange={handleOptionChangePayment}
          />
          <RadioButton
            label="Thanh toán bằng QRCode MoMo"
            value={payMethod.momo}
            checked={sltedOpPay === payMethod.momo}
            onChange={handleOptionChangePayment}
          />
          <h3 className="mt-6 text-sm font-bold text-black max-md:max-w-full">
            Ghi chú đơn hàng
          </h3>
          <textarea
            id="note"
            className="shrink-0 mt-6 bg-orange-100 h-[153px] max-md:max-w-full"
            placeholder="Ghi chú đơn hàng"
          />
          <h2 className="self-center mt-10 text-xl font-bold text-center text-black">
            TỔNG TIỀN
          </h2>
          <div className="px-14 py-9 mt-7 bg-pioonerCraft max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                <p className="text-sm font-bold leading-6 text-stone-50 max-md:mt-10">
                  Số lượng <br /> Tạm tính <br /> Ưu đãi <br /> Phí vận chuyển
                  <br /> Tổng tiền
                </p>
              </div>
              <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                <p className="text-sm font-bold leading-6 text-right text-stone-50 max-md:mt-10">
                  {cartData.totalQuantity ? cartData.totalQuantity : 0}
                  <br />
                  {cartData.totalPrice
                    ? cartData.totalPrice.toLocaleString()
                    : 0}
                  <br />0 <br />
                  {shippingFees[sltedOpMove]
                    ? shippingFees[sltedOpMove].toLocaleString()
                    : 0}{" "}
                  <br />
                  <span className="text-orange-500 font-bold">
                    {calculateTotal().toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {errorModalOpen && (
        <ErrorModal message={errorMessage} onClose={handleCloseErrorModal} />
      )}
    </section>
  );
}
