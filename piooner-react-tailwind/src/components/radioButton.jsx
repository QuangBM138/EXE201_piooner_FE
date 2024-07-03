function RadioButton({ label, value, checked, onChange }) {
  return (
    <div className="flex gap-3.5">
      <input
        type="radio"
        className="shrink-0 w-5 h-5 bg-orange-100 rounded-full"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <div className="flex-auto my-auto">{label}</div>
    </div>
  );
}

export default RadioButton;
