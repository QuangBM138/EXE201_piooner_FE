import * as React from "react";

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
    <div className="flex flex-col justify-center items-start px-16 py-7 text-sm font-medium bg-orange-100 text-stone-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between ml-16 max-w-full w-[807px] max-md:flex-wrap">
        <span>Mã đơn hàng</span>
        <span>Ngày mua</span>
        <span>Tổng tiền</span>
        <span>Trạng thái</span>
      </div>
    </div>
  );
};

const OrderRow = ({ orderId, orderDate, totalPrice, status }) => {
  return (
    <div className="flex gap-5 justify-between self-end mt-4 mr-12 max-w-full font-light w-[971px] max-md:flex-wrap max-md:mr-2.5">
      <div className="flex gap-8 justify-between my-auto text-sm text-stone-800 w-[840px] max-md:flex-wrap max-md:max-w-full">
        <span>{orderId}</span>
        <span>{orderDate}</span>
        <span>{totalPrice}</span>
        <span className="justify-center px-7 py-2 text-center bg-slate-500 text-stone-50 max-md:px-5">
          {status}
        </span>
      </div>
    </div>
  );
};

const orders = [
  {
    orderId: "2304155659",
    orderDate: "01/07/2023",
    totalPrice: "600.000 VND",
    status: "Hoàn tất",
  },
  {
    orderId: "2304155660",
    orderDate: "02/07/2023",
    totalPrice: "700.000 VND",
    status: "Đang xử lý",
  },
  {
    orderId: "2304155661",
    orderDate: "03/07/2023",
    totalPrice: "800.000 VND",
    status: "Hoàn tất",
  },
];

function MyComponent() {
  return (
    <main className="flex flex-col items-center w-full">
      <OrderHeader />
      <section className="flex flex-col pb-5 mx-auto mt-12 w-full max-w-6xl bg-amber-50 max-md:max-w-full">
        <OrderTableHeader />
        {orders.map((order, index) => (
          <OrderRow
            key={index}
            orderId={order.orderId}
            orderDate={order.orderDate}
            totalPrice={order.totalPrice}
            status={order.status}
          />
        ))}
      </section>
    </main>
  );
}

export default MyComponent;
