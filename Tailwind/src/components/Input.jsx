export default function Input({ label, invalid, ...props }) {
  const labelClasses =
    "block mb-2 text-xs font-bold tracking-wide uppercase " +
    (invalid ? "text-red-300" : "text-stone-300");

  const inputClasses =
    "w-full px-3 py-2 leading-tight border rounded shadow " +
    (invalid
      ? "bg-red-100 border-red-300 text-gray-700"
      : "bg-stone-300 border-gray-300 text-gray-700");

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
