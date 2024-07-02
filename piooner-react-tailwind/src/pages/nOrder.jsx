import { useEffect, useState } from "react";
import { fetchOrders } from "../utils/apiService";

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
      </div>
    </div>
  );
};

const OrderRow = ({ orderId, orderDate, totalPrice, status }) => {
  return (
    <div className="flex justify-center w-full mt-4">
      <div className="flex w-full max-w-4xl">
        <span className="flex-1">{orderId}</span>
        <span className="flex-1">{orderDate}</span>
        <span className="flex-1">{totalPrice.toLocaleString()} VND</span>
        <span className="flex-1 text-center bg-slate-500 text-stone-50 px-2 py-1">
          {status}
        </span>
      </div>
    </div>
  );
};

function MyComponent() {
  const [orders, setOrders] = useState([]);
  const email = localStorage.getItem("email"); // Replace with the actual email

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders(email);
        if (data.statusCode === 200) {
          const sortedOrders = data.data.sort(
            (a, b) => new Date(b.createDate) - new Date(a.createDate)
          );
          setOrders(sortedOrders);
        } else {
          console.error("Failed to fetch orders:", data.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    getOrders();
  }, [email]);

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
          />
        ))}
      </section>
    </main>
  );
}

export default MyComponent;
