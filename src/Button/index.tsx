import { RecipeVariants } from "@vanilla-extract/recipes";
import { button, inner } from "./index.css";

type VariantProps = RecipeVariants<typeof button>
export type ButtonProps = JSX.IntrinsicElements["button"] & VariantProps;


const Button: React.FC<ButtonProps> = ({ variant, size, round, ...props }) => {
  return (
    <button {...props} className={button({ variant, size, round })}>
      <div className={inner}>
        {props.children}
      </div>
    </button>
  );
};

export { Button };
