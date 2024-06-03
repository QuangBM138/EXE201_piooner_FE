import { img } from "../utils/assets";

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const ProgressStep = ({ step, isActive, text }) => (
  <div className="flex flex-col">
    <div
      className={`justify-center items-center self-center py-3 px-5 text-base text-white ${
        isActive ? "bg-orange-300" : "bg-stone-800"
      } rounded-full h-[52px] w-[52px] max-md:px-5`}
    >
      {step}
    </div>
    <div
      className={`mt-8 text-sm text-center ${
        isActive ? "text-black" : "text-zinc-400"
      }`}
    >
      {text}
    </div>
  </div>
);

const PayNoLogin = () => {
  const steps = [
    { step: 1, isActive: true, text: "Đăng nhập" },
    { step: 2, isActive: false, text: "Xác nhận đơn hàng" },
    { step: 3, isActive: false, text: "Thanh toán" },
  ];

  return (
    <div className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-4 self-start mt-14 ml-8 text-xl text-amber-700 max-md:mt-10 max-md:ml-2.5">
        <img
          loading="lazy"
          src={img.backbutton}
          className="shrink-0 aspect-square w-[35px]"
          alt=""
        />
        <div className="flex-auto my-auto">
          <span className="">Giỏ hàng/ </span>
          <span className="text-amber-700">Đăng nhập</span>
        </div>
      </nav>
      <section className="flex gap-5 justify-between mt-24 max-w-full font-bold w-[725px] max-md:flex-wrap max-md:mt-10">
        {steps.map((step, index) => (
          <ProgressStep key={index} {...step} />
        ))}
      </section>
      <div className="shrink-0 mt-16 max-w-full h-px bg-black border border-black border-solid w-[1156px] max-md:mt-10"></div>

      <main className="mt-20 justify-between flex gap-5-between items-center w-full text-center max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
        <section className="flex flex-col self-stretch my-auto text-sm text-black">
          <div className="self-center text-xl font-bold">Đăng nhập</div>
          <div className="self-center mt-3">
            Đăng nhập để nhận nhiều những chương trình ưu đãi hấp dẫn
          </div>
          <form className="flex flex-col mt-7" action="#">
            <label htmlFor="emailInput" className="sr-only">
              Email/ Số điện thoại
            </label>
            <input
              className="mt-2.5 bg-orange-100 h-[49px]"
              type="email"
              id="emailInput"
              placeholder="Email/ Số điện thoại"
              aria-label="Email/ Số điện thoại"
            />
            <label htmlFor="passwordInput" className="sr-only">
              Mật khẩu
            </label>
            <input
              className="mt-4 bg-orange-100 h-[49px]"
              type="password"
              id="passwordInput"
              placeholder="Mật khẩu"
              aria-label="Mật khẩu"
            />
            <a className="self-end mt-3 italic" href="#">
              Quên mật khẩu?
            </a>
            <button
              type="submit"
              className="justify-center items-center px-16 py-4 mt-2.5 text-base font-bold text-white bg-pioonerCraft max-md:px-5"
            >
              Đăng nhập
            </button>
          </form>
        </section>
        <img
          loading="lazy"
          src={img.liney}
          className="shrink-0 self-stretch w-px border border-black border-solid aspect-[0] stroke-[1px] stroke-black"
        />
        <button className="justify-center items-center self-stretch px-16 py-4 my-auto text-base font-bold text-white bg-pioonerCraft max-md:px-5">
          Mua hàng không đăng nhập
        </button>
      </main>
    </div>
  );
};

export default PayNoLogin;
