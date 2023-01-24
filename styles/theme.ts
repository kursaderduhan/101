import {
  extendTheme,
  theme as base,
  useColorModeValue,
  type ThemeConfig,
} from '@chakra-ui/react'
const config: ThemeConfig = {
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors: {
    dark: {
      100: '#E3AA00', // yellow
      200: '#000000', // black
      300: '#06141D', 
      400: '#1B2730', 
      500: '#1D3240', 
      600: '#0F222E', 
    },
    light: {
      100: '#FFFFFF', // white
      200: '#CECECE', // off-white
      300: '#fff4c7',
      400: '#DEDEDE',
    },
  },
  textStyles: {
    normal: {
      fontSize: { base: 'xs', md: 'sm', lg: 'sm' },
    },
    mainPage: {
      fontSize: { base: 'xs', md: 'sm', lg: '5xl' },
      color: 'gray',
      fontWeight: '500',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 5,
      },
      variants: {
        tools: (props: any) => ({
          ...base?.components?.Button?.variants?.outline(props),
          bg: 'transparent',
          color: useColorModeValue('dark.200', 'light.100'),
          cursor: 'pointer',
          border: 'none',
        }),
        styleButton: (props: any) => ({
          ...base?.components?.Button?.variants?.outline(props),
          borderRadius: '20',
          backgroundColor: 'dark.100',
          width: '150px',
          fontSize: 'md',
          _hover: {
            opacity: 0.8,
          },
        }),
      },
    },
  },
})
export default theme
