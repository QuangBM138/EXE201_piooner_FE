import React from "react";

function SuccessModal({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Success</h2>
        <p>{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
