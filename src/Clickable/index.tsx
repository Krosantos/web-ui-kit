import { clickable } from "./index.css";

export type ButtonProps = JSX.IntrinsicElements["button"];

const Clickable: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={clickable}>
      {children}
    </button>
  );
};

export { Clickable };
