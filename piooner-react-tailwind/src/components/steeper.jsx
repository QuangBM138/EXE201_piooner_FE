import "./stepper.css";

// eslint-disable-next-line react/prop-types
const ProgressStep = ({ step, isActive, text }) => (
  //   const steps = ["Customer Info", "Shipping Info", "Payment"];
  //   const [currentStep] = useState(1);

  <div className={`step-item ${isActive && "active"}`}>
    <div className="step">{step}</div>
    <div
      className={`mt-8 text-sm text-center ${
        isActive ? "text-black" : "text-zinc-400"
      }`}
    >
      {text}
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const Stepper = ({ steps }) => (
  <section className="flex gap-5 justify-between mt-24 max-w-full font-bold w-[725px] max-md:flex-wrap max-md:mt-10">
    {steps.map((step, index) => (
      <ProgressStep key={index} {...step} />
    ))}
  </section>
);

export default Stepper;
