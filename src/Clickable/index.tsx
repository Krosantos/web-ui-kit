import { clickable } from "./index.css";

export type ClickableProps = JSX.IntrinsicElements["button"];

const Clickable: React.FC<ClickableProps> = ({ children, ...props }) => (
  <button {...props} className={clickable}>
    {children}
  </button>
);

export { Clickable };
