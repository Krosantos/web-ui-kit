import { button } from "./index.css";

type ButtonProps = JSX.IntrinsicElements["button"];

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={button}>
      {props.children}
    </button>
  );
};

export { Button };
