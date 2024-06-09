import * as React from "react";

interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
}

const orders: Order[] = [
  {
    id: "2304155659",
    date: "01/07/2023",
    total: "600.000 VND",
    status: "Hoàn tất",
  },
];

const OrderRow: React.FC<{ order: Order }> = ({ order }) => (
  <div className="flex gap-5 justify-between self-end mt-4 mr-12 max-w-full font-light w-[971px] max-md:flex-wrap max-md:mr-2.5">
    <div className="flex gap-8 justify-between my-auto text-sm text-stone-800 w-[840px] max-md:flex-wrap max-md:max-w-full">
      <div>{order.id}</div>
      <div>{order.date}</div>
      <div>{order.total}</div>
      <div className="justify-center px-7 py-2 text-center bg-slate-500 text-stone-50 max-md:px-5">
        {order.status}
      </div>
    </div>
  </div>
);

const OrderSummaryTable: React.FC<{ orders: Order[] }> = ({ orders }) => (
  <section className="flex flex-col pb-5 mx-auto mt-12 w-full max-w-6xl bg-amber-50 max-md:max-w-full">
    <header className="flex flex-col justify-center items-start px-16 py-7 text-sm font-medium bg-orange-100 text-stone-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between ml-16 max-w-full w-[807px] max-md:flex-wrap">
        <div>Mã đơn hàng</div>
        <div>Ngày mua</div>
        <div>Tổng tiền</div>
        <div>Trạng thái</div>
      </div>
    </header>
    {orders.map((order) => (
      <OrderRow key={order.id} order={order} />
    ))}
  </section>
);

function nearOrderPage() {
  return (
    <main className="flex flex-col pt-20 bg-white">
      <header className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="mt-8 text-3xl font-bold text-center text-stone-800">
          Đơn hàng gần nhất
        </h1>
      </header>
      <OrderSummaryTable orders={orders} />
    </main>
  );
}

export default nearOrderPage;
