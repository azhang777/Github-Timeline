import ButtonProp from "@/types/props/button-prop";
import clsx from "clsx";
export default function Button({ children, className, ...rest }: ButtonProp) {
  return (
    <button
      {...rest}
      className={clsx(
        "items-center rounded-full border-gray-200 bg-gray-800 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-gray-700 focus:outline-none",
        className,
      )}
    >
      {children}
    </button>
  );
}

/*

rounded-md bg-blue-500 px-4 py-4 text-sm font-semibold text-white shadow-md hover:bg-blue-400 hover:shadow-lg focus:outline-none active:bg-blue-500
 */
