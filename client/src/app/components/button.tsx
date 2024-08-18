import clsx from "clsx";
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded-md bg-blue-500 px-4 py-4 text-sm font-semibold text-white shadow-md hover:bg-blue-400 hover:shadow-lg focus:outline-none active:bg-blue-500",
        className,
      )}
    >
      {children}
    </button>
  );
}
