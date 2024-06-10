import { Link } from "react-router-dom";

function Login({ textLogin }) {
  return (
    <section className="flex flex-col self-center my-auto text-sm w-4/12">
      <div className="self-center text-xl font-bold ">Đăng nhập</div>
      <div className="self-center mt-3">{textLogin}</div>
      <form className="flex flex-col mt-7 w-auto" action="#">
        <h3 className="text-xl font-bold text-center text-gray-800">Đăng nhập</h3>
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
        <div className="w-fulflex justify-between mt-3 w-fulll">
          <Link href="#" className=" italic mr-12">
            Đăng ký
          </Link>
          <Link href="#" className=" italic ml-12">
            Quên mật khẩu?
          </Link>
        </div>

        <button
          type="submit"
          className="justify-center items-center px-16 py-4 mt-2.5 text-base font-bold text-white bg-pioonerCraft max-md:px-5"
        >
          Đăng nhập
        </button>
      </form>
    </section>
  );
}

export default Login;
