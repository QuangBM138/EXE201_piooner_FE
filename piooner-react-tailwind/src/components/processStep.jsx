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

const ProgressSteps = ({ steps }) => (
  <section className="flex gap-5 justify-between mt-24 max-w-full font-bold w-[725px] max-md:flex-wrap max-md:mt-10">
    {steps.map((step, index) => (
      <ProgressStep key={index} {...step} />
    ))}
  </section>
);

export default ProgressSteps;
