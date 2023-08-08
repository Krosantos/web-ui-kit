import { style } from "@vanilla-extract/css";
import { theme } from "../theme/_contract.css";
import { recipe } from '@vanilla-extract/recipes'

const base = style({
    fontFamily: theme.font.body,
    lineHeight: 1.3
});

export const typography = recipe({
    base,

    variants: {
        size: {
            xxxlarge: {
                fontSize: '4.209rem'
            },
            xxlarge: {
                fontSize: '3.157rem'
            },
            xlarge: {
                fontSize: '2.369rem'
            },
            large: {
                fontSize: '1.333rem'
            },
            medium: {
                fontSize: '1rem'
            },
            small: {
                fontSize: '0.75rem'
            },
            xsmall: {
                fontSize: '0.563rem'
            },
            xxsmall: {
                fontSize: '0.422rem'
            },
        },
        bold: {
            true: {
                fontWeight: 'bold'
            }
        },
        italic: {
            true: {
                fontStyle: 'italic'
            }
        },
        underline: {
            true: {
                textDecoration: 'underline'
            }
        },
        strikethrough: {
            true: {
                textDecoration: 'line-through'
            }
        },
        display: {
            true: {
                fontFamily: theme.font.display
            }
        }
    },
    defaultVariants: {
        size: 'medium',
    }
})
