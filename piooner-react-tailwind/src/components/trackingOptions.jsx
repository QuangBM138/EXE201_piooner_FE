/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { sendMailOrder } from "../utils/apiService";
import { RouteMap } from "../utils/assets";
import { useNavigate } from "react-router-dom";
// import Modal from "./Modal";

const Modal = ({ showModal, handleClose, message }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50  max-h-full">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] h-[30%] max-h-full items-center text-center">
        {/* Title and message */}
        <h2 className="text-4xl  font-bold mb-4 text-center">Thông báo</h2>
        <p className="text-gray-500"> {message}</p>

        {/* Button container (centered by default) */}
        <div className="items-center justify-center mt-4">
          <button
            onClick={handleClose}
            className="items-center bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

function TrackingOptions({ email }) {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();
  console.log("email", email);

  const handleSendMailOrder = async () => {
    try {
      await sendMailOrder(email);
      setModalMessage(
        "Đơn hàng đã được gửi qua email thành công. Vui lòng kiểm tra mail."
      );
    } catch (error) {
      setModalMessage("Failed to send email. Please try again later.");
      console.error("Error sending mail order:", error);
    } finally {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNearOrder = () => {
    navigate(RouteMap.nearOrderPage);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate(RouteMap.homeRoute);
  };

  return (
    <div className="w-[30%] flex flex-col grow text-xl font-medium text-neutral-900 max-md:mt-10">
      <div onClick={handleSendMailOrder} className="cursor-pointer">
        NHẬN ĐƠN HÀNG BẰNG EMAIL
      </div>
      <div onClick={handleNearOrder} className="cursor-pointer mt-6">
        ĐƠN HÀNG GẦN NHẤT
      </div>
      <div onClick={handleLogout} className="cursor-pointer mt-6">
        ĐĂNG XUẤT
      </div>
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        message={modalMessage}
      />
    </div>
  );
}

export default TrackingOptions;
