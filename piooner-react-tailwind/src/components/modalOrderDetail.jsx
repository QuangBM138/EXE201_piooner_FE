/* eslint-disable react/prop-types */
const ModalOrderDetail = ({ isVisible, onClose, order }) => {
  if (!isVisible) return null;

  const totalQuantity = order.orderDetails.reduce(
    (total, detail) => total + detail.orderQuantity,
    0
  );
  const totalPrice = order.orderDetails.reduce(
    (total, detail) => total + detail.orderPrice * detail.orderQuantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-6xl max-md:w-11/12 w-full">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-stone-800 mx-auto">
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
        <div className="bg-amber-50">
          <div className="flex justify-center items-start px-16 py-7 text-sm font-medium bg-orange-100 text-stone-800 max-md:px-5 max-md:max-w-full">
            <div className="flex w-full max-w-4xl text-center">
              <span className="flex-1">Mã đơn hàng</span>
              <span className="flex-1">Tên sản phẩm</span>
              <span className="flex-1 text-center">Số lượng</span>
              <span className="flex-1 text-center">Giá</span>
            </div>
          </div>

          {order.orderDetails.length > 0 ? (
            order.orderDetails.map((detail) => (
              <div className="flex justify-center w-full mt-4" key={detail.id}>
                <div className="flex w-full max-w-4xl text-center">
                  <span className="flex-1">{order.orderCode}</span>
                  <span className="flex-1">{detail.productName}</span>
                  <span className="flex-1">{detail.orderQuantity}</span>
                  <span className="flex-1 text-orange-700">
                    {detail.orderPrice.toLocaleString()} VND
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p className="text-stone-800">Không có chi tiết sản phẩm.</p>
            </div>
          )}
          <div className="flex p-2 justify-center w-full mt-4  bg-orange-100">
            <div className="flex w-full max-w-4xl text-center">
              <span className="flex-1">{order.orderCode}</span>
              <span className="flex-1"></span>
              <span className="flex-1 text-center">{totalQuantity}</span>
              <span className="flex-1 text-center text-orange-700">
                {totalPrice.toLocaleString()} VND
              </span>
            </div>
          </div>
        </div>
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
