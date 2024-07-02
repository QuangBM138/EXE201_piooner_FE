/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchOrders } from "../utils/apiService";
import ErrorModal from "../components/ModelError"; // Import ErrorModal
import { useNavigate } from "react-router-dom";

const OrderHeader = () => {
  return (
    <header className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
      <h1 className="mt-8 text-3xl font-bold text-center text-stone-800">
        Đơn hàng gần nhất
      </h1>
    </header>
  );
};

const OrderTableHeader = () => {
  return (
    <div className="flex justify-center items-start px-16 py-7 text-sm font-medium bg-orange-100 text-stone-800 max-md:px-5 max-md:max-w-full">
      <div className="flex w-full max-w-4xl">
        <span className="flex-1">Mã đơn hàng</span>
        <span className="flex-1">Ngày mua</span>
        <span className="flex-1">Tổng tiền</span>
        <span className="flex-1 text-center">Trạng thái</span>
        <span className="flex-1 text-center">Xem chi tiết</span>
      </div>
    </div>
  );
};

const OrderRow = ({
  orderId,
  orderDate,
  totalPrice,
  status,
  onViewDetails,
}) => {
  return (
    <div className="flex justify-center w-full mt-4">
      <div className="flex w-full max-w-4xl">
        <span className="flex-1">{orderId}</span>
        <span className="flex-1">{orderDate}</span>
        <span className="flex-1">{totalPrice.toLocaleString()} VND</span>
        <span className="flex-1 text-center">
          <span
            className={`text-stone-50 px-2 py-1 ${
              status === "processing"
                ? "bg-pioonerCraft"
                : status === "completed"
                ? "bg-green-200"
                : status === "cancel"
                ? "bg-red-500"
                : "bg-white"
            }`}
          >
            {status === "processing"
              ? "Đang xử lý"
              : status === "completed"
              ? "Hoàn thành"
              : status === "cancel"
              ? "đã hủy"
              : "Không xác định"}
          </span>
        </span>
        <span className="flex-1 text-center">
          <button
            className="text-orange-400 px-2 py-1 rounded"
            onClick={onViewDetails}
          >
            Xem chi tiết
          </button>
        </span>
      </div>
    </div>
  );
};

const Modal = ({ isVisible, onClose, order }) => {
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
                  <strong className="text-stone-800">ID sản phẩm:</strong>{" "}
                  {detail.productId}
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

function MyComponent() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const email = localStorage.getItem("email"); // Replace with the actual email
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders(email);
        if (data.statusCode === 200) {
          const sortedOrders = data.data.sort(
            (a, b) => new Date(b.createDate) - new Date(a.createDate)
          );
          setOrders(sortedOrders);
          if (sortedOrders.length === 0) {
            setErrorMessage(
              "Hiện tại bạn chưa đặt hàng nào. Vui lòng đặt hàng trước."
            );
          }
        } else {
          console.error("Failed to fetch orders:", data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    getOrders();
  }, [email]);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <main className="flex flex-col items-center w-full">
      <OrderHeader />
      <section className="flex flex-col pb-5 mx-auto mt-12 w-full max-w-6xl bg-amber-50 max-md:max-w-full">
        <OrderTableHeader />
        {orders.map((order) => (
          <OrderRow
            key={order.id}
            orderId={order.orderCode}
            orderDate={new Date(order.createDate).toLocaleDateString()}
            totalPrice={order.totalPrice}
            status={order.status}
            onViewDetails={() => handleViewDetails(order)}
          />
        ))}
      </section>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        order={selectedOrder}
      />
      {errorMessage && (
        <ErrorModal message={errorMessage} onClose={handleBackClick} />
      )}
    </main>
  );
}

export default MyComponent;
