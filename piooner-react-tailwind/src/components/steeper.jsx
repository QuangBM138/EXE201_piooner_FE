import "./stepper.css";

const text = ["Đăng nhập", "Xác nhận đơn hàng", "Thanh toán"];
// eslint-disable-next-line react/prop-types
const ProgressStep = ({ isActive, index }) => (
  //   const steps = ["Customer Info", "Shipping Info", "Payment"];
  //   const [currentStep] = useState(1);
  <div className={`step-item ${isActive && "active"}`}>
    <div className="step">{index + 1}</div>
    <div
      className={`mt-8 text-sm text-center ${
        isActive ? "text-black" : "text-zinc-400"
      }`}
    >
      {text[index]}
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const Stepper = ({ isActive }) => (
  <section className="flex gap-5 justify-between mt-24 max-w-full font-bold w-[725px] max-md:flex-wrap max-md:mt-10">
    {isActive.map((isActive, index) => (
      <ProgressStep key={index} isActive={isActive} index={index} />
    ))}
  </section>
);

export default Stepper;
