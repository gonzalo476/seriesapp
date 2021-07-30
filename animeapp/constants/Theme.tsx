import { createBox, createText, BaseTheme } from '@shopify/restyle'

import palette from './palette'

const theme: BaseTheme = {
    colors: {
        primary: palette.lightBlue,
        active: palette.mutedBlue,
        inActive: palette.shyBlue,
        error: palette.red,
        success: palette.green,
        warning: palette.yellow,
        gray: palette.gray,
        orange: palette.orange,
        black: palette.black,
        white: palette.white,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
        largeTablet: 1024
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,    
    },
    textVariants: {
        largeTitle: {
            fontFamily: 'Gellix-SemiBold',
            lineHeight: 41,
            fontSize: 34,
            color: 'white'
        },
        title1: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 34,
            fontSize: 28,
            color: 'white'
        },
        title2: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 28,
            fontSize: 22,
            color: 'white'
        },
        title3: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 25,
            fontSize: 20,
            color: 'white'
        },
        headline: {
            fontFamily: 'Gellix-SemiBold',
            lineHeight: 22,
            fontSize: 17,
            color: 'white'
        },
        body: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 22,
            fontSize: 17,
            color: 'white'
        },
        callout: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 21,
            fontSize: 16,
            color: 'white'
        },
        subhead: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 20,
            fontSize: 15,
            color: 'white'

        },
        footnote: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 18,
            fontSize: 15,
            color: 'white'

        },
        caption1: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 16,
            fontSize: 12,
            color: 'white'

        },
        caption2: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 13,
            fontSize: 11,
            color: 'white'

        },
    }
}

export default theme
export type Theme = typeof theme
export const Box = createBox<Theme>()
export const Text = createText<Theme>()