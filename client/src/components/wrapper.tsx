interface WrapperProps {
  //refer to tailwind for how to use props
  margin?: "0" | "2" | "4" | "8" | "10"; //e.g, "4" for m-4
  children: React.ReactNode;
  backgroundColor?: string; //e.g, "gray-100" for bg-gray-100
  borderRadiusEnabled?: boolean; //if true, use border radius of 50%
}

export const Wrapper: React.FC<WrapperProps> = ({
  margin = "0",
  children,
  backgroundColor = "bg-white",
  borderRadiusEnabled = "false",
}) => {
  const marginClass = {
    "0": "m-0",
    "2": "m-2",
    "4": "m-4",
    "6": "m-6",
    "8": "m-8",
    "10": "m-10",
  }[margin];
  //   const { margin, children, backgroundColor, borderRadiusEnabled } = props;
  return (
    <div
      className={`h-full ${marginClass} bg-${backgroundColor} ${borderRadiusEnabled ? "rounded-lg" : ""}`}
    >
      {children}
    </div>
  );
};

// export default function Wrapper(): React.FC<WrapperProps> {
//   <div></div>;
// }
