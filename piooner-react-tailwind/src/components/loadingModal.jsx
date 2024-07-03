/* eslint-disable react/prop-types */
import React from "react";

const LoadingModal = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded">
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
