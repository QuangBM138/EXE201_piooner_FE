const ModalOrderDetail = ({ isVisible, onClose, order }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-3xl max-md:w-11/12">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-stone-800">
            Chi tiết đơn hàng
          </h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <p>
            <strong className="text-stone-800">Mã đơn hàng:</strong>{" "}
            {order.orderCode}
          </p>
          <p>
            <strong className="text-stone-800">Ngày mua:</strong>{" "}
            {new Date(order.createDate).toLocaleDateString()}
          </p>
          <p>
            <strong className="text-stone-800">Tổng tiền:</strong>{" "}
            {order.totalPrice.toLocaleString()} VND
          </p>
        </div>
        <h3 className="text-xl font-semibold text-stone-800 mt-6 mb-2">
          Chi tiết sản phẩm
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          {order.orderDetails.length > 0 ? (
            order.orderDetails.map((detail) => (
              <li key={detail.id} className="mb-2">
                <p>
                  <strong className="text-stone-800">Tên sản phẩm:</strong>{" "}
                  {detail.productName}
                </p>
                <p>
                  <strong className="text-stone-800">Số lượng:</strong>{" "}
                  {detail.orderQuantity}
                </p>
                <p>
                  <strong className="text-stone-800">Giá:</strong>{" "}
                  {detail.orderPrice.toLocaleString()} VND
                </p>
              </li>
            ))
          ) : (
            <p className="text-stone-800">Không có chi tiết sản phẩm.</p>
          )}
        </ul>
        <div className="flex justify-end mt-6">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

//export
export default ModalOrderDetail;
