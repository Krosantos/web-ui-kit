import { RecipeVariants } from "@vanilla-extract/recipes";
import { typography } from "./index.css";

type TopLevelProps = {
  inline?: boolean;
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
  inline,
  children,
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

  if (display) {
    switch (size) {
      case "xxxlarge":
      case "xxlarge":
        return (
          <h1 {...props} className={className}>
            {children}
          </h1>
        );
      case "xlarge":
        return (
          <h2 {...props} className={className}>
            {children}
          </h2>
        );
      case "large":
        return (
          <h3 {...props} className={className}>
            {children}
          </h3>
        );
      default:
      case "medium":
        return (
          <h4 {...props} className={className}>
            {children}
          </h4>
        );
      case "small":
        return (
          <h5 {...props} className={className}>
            {children}
          </h5>
        );
      case "xsmall":
      case "xxsmall":
        return (
          <h6 {...props} className={className}>
            {children}
          </h6>
        );
    }
  } else if (inline) {
    return (
      <span {...props} className={className}>
        {children}
      </span>
    );
  } else {
    return (
      <p {...props} className={className}>
        {children}
      </p>
    );
  }
};

export { Text };
