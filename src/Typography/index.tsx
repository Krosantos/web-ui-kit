import { RecipeVariants } from "@vanilla-extract/recipes";
import { typography } from "./index.css";

type TopLevelProps = {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
type VariantProps = RecipeVariants<typeof typography>;
export type TextProps = JSX.IntrinsicElements["p"] & VariantProps & TopLevelProps;

const Text: React.FC<TextProps> = ({
  size,
  bold,
  italic,
  display,
  underline,
  strikethrough,
  children,
  as = "p",
  ...props
}) => {
  const className = typography({
    size,
    bold,
    italic,
    display,
    underline,
    strikethrough,
  });
  switch (as) {
    case "h1":
      return (
        <h1 {...props} className={className}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...props} className={className}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...props} className={className}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 {...props} className={className}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 {...props} className={className}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 {...props} className={className}>
          {children}
        </h6>
      );
    case "span":
      return (
        <span {...props} className={className}>
          {children}
        </span>
      );
    case "p":
      return (
        <p {...props} className={className}>
          {children}
        </p>
      );
  }
};

export { Text };
