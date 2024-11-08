import { ReactNode } from "react";

export default interface ButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}
