import React from 'react'

import type { AppProps } from 'next/app'

import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/700.css'

import {
  ChakraProvider, Icon, IconButton
} from '@chakra-ui/react'

import theme from '@/utils/theme'

import { Provider as JotaiProvider } from 'jotai'
import { TrysteroProvider } from '@/utils/hooks/useTrysteroRoom'
import FloatingActionButtons from '@/components/FloatingActionButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <TrysteroProvider>
        <ChakraProvider theme={theme}>
          <Navbar />
          
          <Component {...pageProps} />

          <FloatingActionButtons>
            <IconButton
              as="a"
              href="https://github.com/sonroyaalmerol"
              target="_blank"
              borderRadius="full"
              aria-label="Github"
              colorScheme="whiteAlpha"
              color={theme.colors.white}
              icon={<Icon as={FaGithub} />}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/sonroyaalmerol/"
              target="_blank"
              borderRadius="full"
              aria-label="LinkedIn"
              colorScheme="whiteAlpha"
              color={theme.colors.white}
              icon={<Icon as={FaLinkedin} />}
            />
            <IconButton
              as="a"
              href="mailto:me@snry.xyz"
              target="_blank"
              borderRadius="full"
              aria-label="Mail"
              colorScheme="whiteAlpha"
              color={theme.colors.white}
              icon={<Icon as={GrMail} />}
            />
          </FloatingActionButtons>
        </ChakraProvider>
      </TrysteroProvider>
    </JotaiProvider>
  )
}
