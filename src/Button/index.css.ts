import { style } from "@vanilla-extract/css";
import { theme } from "../theme/_contract.css";
import { recipe } from '@vanilla-extract/recipes'

const base = style({
  border: 'none',
  color: theme.text.default,
  borderRadius: theme.radii.slight,
  boxShadow: theme.shadow.soft,
  borderWidth: theme.borderWidth,
  borderStyle: 'solid',
  cursor: 'pointer',
  transition: "all 0.25s ease-in",
  fontFamily: theme.font.body,
});

export const button = recipe({
  base,

  variants: {
    variant: {
      primary: {
        backgroundColor: theme.surface.primary.default,
        ":disabled": {
          cursor: 'not-allowed',
          backgroundColor: theme.surface.primary.disabled
        },

        ":hover": {
          backgroundColor: theme.surface.primary.hovered
        },

        ":active": {
          backgroundColor: theme.surface.primary.active
        }
      },
      secondary: {
        backgroundColor: theme.surface.secondary.default,
        ":disabled": {
          cursor: 'not-allowed',
          backgroundColor: theme.surface.secondary.disabled
        },

        ":hover": {
          backgroundColor: theme.surface.secondary.hovered
        },

        ":active": {
          backgroundColor: theme.surface.secondary.active
        }
      },
    },
    size: {
      compact: {},
      small: {},
      medium: {},
      large: {}
    },
    round: {
      true: {
        borderRadius: theme.radii.round
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    round: false
  }
})
