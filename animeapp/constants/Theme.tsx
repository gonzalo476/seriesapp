import { createBox, createText, BaseTheme } from '@shopify/restyle'

const palette = {
    lightBlue: '#1CA8E2',
    mutedBlue: '#159DD5',
    shyBlue: '#1E3548',
    darkBlue: '#14242A',

    black: '#000000',
    white: '#FFFFFF',
    red: '#FF3B30',
    green: '#34C759',
    orange: '#FD823D',
    yellow: '#FFC61D',
    gray: '#6D7278'
    
}

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
        },
        title1: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 34,
            fontSize: 28,
        },
        title2: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 28,
            fontSize: 22,
        },
        title3: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 25,
            fontSize: 20,
        },
        headline: {
            fontFamily: 'Gellix-SemiBold',
            lineHeight: 22,
            fontSize: 17,
        },
        body: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 22,
            fontSize: 17,
        },
        callout: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 21,
            fontSize: 16,
        },
        subhead: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 20,
            fontSize: 15,
        },
        footnote: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 18,
            fontSize: 15,
        },
        caption1: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 16,
            fontSize: 12,
        },
        caption2: {
            fontFamily: 'Gellix-Regular',
            lineHeight: 13,
            fontSize: 11,
        },
    }
}

export default theme
export type Theme = typeof theme
export const Box = createBox<Theme>()
export const Text = createText<Theme>()