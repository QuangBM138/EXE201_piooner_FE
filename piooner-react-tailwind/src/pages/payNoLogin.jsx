import { useNavigate } from "react-router-dom";
import Stepper from "../components/steeper";
import { img, RouteMap as RM } from "../utils/assets";
import Login from "./Login";

const PayNoLogin = () => {
  const isActive = [true, false, false];
  const navigate = useNavigate();

  const handleConfirmOrderNoLogin = () => {
    navigate(RM.confirmOrderRoute); // Navigate to payNoLogin page
  };
  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div className="flex flex-col items-center px-20 mt-2.5 w-full max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-4 self-start mt-14 ml-8 text-xl text-amber-700 max-md:mt-10 max-md:ml-2.5">
        <img
          loading="lazy"
          src={img.backbutton}
          className="shrink-0 aspect-square w-[35px]"
          alt="back"
          onClick={handleBackClick}
        />
        <div className="flex-auto my-auto">
          <span className="">Giỏ hàng/ </span>
          <span className="text-amber-700">Đăng nhập</span>
        </div>
      </nav>
      {/* hien thi các bước */}
      <Stepper isActive={isActive} />
      {/* <ProgressSteps steps={steps}></ProgressSteps> */}
      <div className="shrink-0 mt-16 max-w-full h-px bg-black border border-black border-solid w-[1156px] max-md:mt-10"></div>

      <main className="mt-20 justify-between flex gap-5-between items-center w-full text-center max-w-[1007px] max-md:flex-wrap max-md:max-w-full">
        <Login textLogin="Đăng nhập để nhận nhiều những chương trình ưu đãi hấp dẫn" />
        <img
          loading="lazy"
          src={img.liney}
          className="shrink-0 self-stretch w-px border border-black border-solid aspect-[0] stroke-[1px] stroke-black"
        />
        <button
          className="justify-center items-center self-stretch px-16 py-4 my-auto text-base font-bold text-white bg-pioonerCraft max-md:px-5"
          onClick={handleConfirmOrderNoLogin}
        >
          Mua hàng không đăng nhập
        </button>
      </main>
    </div>
  );
};

export default PayNoLogin;
