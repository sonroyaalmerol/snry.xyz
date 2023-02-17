import React from 'react'

import type { AppProps } from 'next/app'

import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/700.css'

import {
  ChakraProvider
} from '@chakra-ui/react'

import theme from '@/utils/theme'

import { Provider as JotaiProvider } from 'jotai'
import { TrysteroProvider } from '@/utils/hooks/useTrysteroRoom'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <TrysteroProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </TrysteroProvider>
    </JotaiProvider>
  )
}
