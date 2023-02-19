import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    defaultColorMode: 'dark',
  },
  fonts: {
    heading: '\'Fira Code\', monospace',
    body: '\'Fira Code\', monospace',
  },
  colors: {
    brand: {
      50: '#E5E9F0',
      100: '#CBD5E1',
      200: '#A8B2C1',
      300: '#858F9F',
      400: '#626C7F',
      500: '#3F475F',
      600: '#2E3440',
      700: '#1D212B',
      800: '#0D1016',
      900: '#010409',
    },
    primary: {
      50: '#EDF4FF',
      100: '#DCE9FE',
      200: '#BACFFF',
      300: '#99B5E5',
      400: '#779BD9',
      500: '#5571CD',
      600: '#4158A5',
      700: '#2E3F7D',
      800: '#1A2655',
      900: '#0A0F2B',
    },
    secondary: {
      50: '#F4F4F4',
      100: '#EAEAEA',
      200: '#D0D0D0',
      300: '#B6B6B6',
      400: '#9C9C9C',
      500: '#828282',
      600: '#686868',
      700: '#4E4E4E',
      800: '#343434',
      900: '#1A1A1A',
    },
    accent: {
      50: '#FFF3E6',
      100: '#FFE2BF',
      200: '#FFC799',
      300: '#FFB573',
      400: '#FFA34C',
      500: '#FF9126',
      600: '#E67E1E',
      700: '#B36117',
      800: '#81450F',
      900: '#4F2907',
    },
  },
});

export default theme;
