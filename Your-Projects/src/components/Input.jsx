import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-semibold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full p-3 mt-1 border-2 border-stone-300 rounded-md bg-stone-100 text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500 resize-none"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full p-3 mt-1 border-2 border-stone-300 rounded-md bg-stone-100 text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500"
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
