import { img } from "../utils/assets";

// eslint-disable-next-line react/prop-types
function InputField({ label, type, id, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="shrink-0 mt-2 max-w-full bg-orange-100 h-[49px] w-[387px]"
      />
    </div>
  );
}

function FollowOrder() {
  return (
    <div className="flex flex-col pt-20 bg-white">
      <div className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1249px] max-md:flex-wrap max-md:max-w-full"></div>
        <div className="flex gap-4 self-start mt-20 ml-8 text-xl text-neutral-900 max-md:mt-10 max-md:ml-2.5">
          <img
            loading="lazy"
            src={img.backbutton}
            className="shrink-0 aspect-square w-[35px]"
            alt="User account"
          />
          <div className="flex-auto my-auto">
            <span className="">Tài khoản/</span>
            <span className="font-semibold"> Theo dõi đơn hàng</span>
          </div>
        </div>
        <h1 className="mt-12 text-3xl font-bold text-neutral-900 max-md:mt-10">
          Theo dõi đơn hàng
        </h1>
        <form className="mt-10 w-full max-w-[387px]">
          <p className="text-sm text-black max-md:mt-10">Mã đơn hàng</p>
          <InputField
            label="Mã đơn hàng"
            type="text"
            id="orderId"
            placeholder="Nhập mã đơn hàng"
          />
          <p className="mt-7 text-sm text-black">Email</p>
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="nhập email"
          />
          <p className="mt-6 text-sm italic text-center text-neutral-900">
            Nhận lại mã đơn hàng qua Email
          </p>
          <button
            type="submit"
            className="justify-center items-center px-16 py-5 mt-4 max-w-full text-base font-bold text-center text-white bg-pioonerCraft w-[387px] max-md:px-5"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  );
}

export default FollowOrder;
