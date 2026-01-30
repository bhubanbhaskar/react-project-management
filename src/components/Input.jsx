import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const baseStyles =
    "w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 bg-stone-50 text-stone-900 resize-none";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={baseStyles} {...props} />
      ) : (
        <input ref={ref} className={baseStyles} {...props} />
      )}
    </p>
  );
});
export default Input;
