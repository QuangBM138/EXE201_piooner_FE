// eslint-disable-next-line react/prop-types
function InputField({ id, label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col grow text-sm text-black max-md:mt-10">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-label={label}
        className="mt-2.5 bg-orange-100 h-[49px]"
      />
    </div>
  );
}

export default InputField;
