import { RecipeVariants } from "@vanilla-extract/recipes";
import { button } from "./index.css";

type VariantProps = RecipeVariants<typeof button>
export type ButtonProps = JSX.IntrinsicElements["button"] & VariantProps;


const Button: React.FC<ButtonProps> = ({ variant, size, round, ...props }) => {
  return (
    <button {...props} className={button({ variant, size, round })}>
      {props.children}
    </button>
  );
};

export { Button };
