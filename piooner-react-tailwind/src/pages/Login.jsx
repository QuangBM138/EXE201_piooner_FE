import { Link } from "react-router-dom";

function Login({ textLogin }) {
  return (
    <section className="flex flex-col self-center my-auto text-sm w-4/12">
      <div className="self-center text-xl font-bold mt-40">Đăng nhập</div>
      <div className="self-center mt-3">{textLogin}</div>
      <form className="flex flex-col mt-7 w-auto" action="#">
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
        <div className="w-full">
          <Link href="#" className="self-start mt-3 italic">
            Quên mật khẩu?
          </Link>
          <Link href="#" className="self-end mt-3 italic">
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
