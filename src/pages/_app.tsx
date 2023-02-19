import React from 'react';

import type { AppProps } from 'next/app';

import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/700.css';

import {
  Box,
  ChakraProvider,
} from '@chakra-ui/react';

import theme from '@/utils/theme';
import trpc from '@/utils/trpc';

import { Provider as JotaiProvider } from 'jotai';
import { TrysteroProvider } from '@/utils/hooks/useTrysteroRoom';
import { AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { DefaultSeo } from 'next-seo';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Son Roy Almerol"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://snry.xyz/',
          siteName: 'Son Roy Almerol | snry.xyz',
        }}
        twitter={{
          handle: '@sonroyaalmerol',
          site: '@sonroyaalmerol',
          cardType: 'summary_large_image',
        }}
      />
      <JotaiProvider>
        <TrysteroProvider>
          <ChakraProvider theme={theme}>
            <Box
              position="fixed"
              top="0"
              left="0"
              bgColor={theme.colors.brand[700]}
              color={theme.colors.white}
              w="100vw"
              h="100vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
              zIndex={0}
            >
              <TypeAnimation
                sequence={[
                  'Loading...',
                  500,
                  '',
                  100,
                ]}
                repeat={Infinity}
                cursor
              />
            </Box>
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </ChakraProvider>
        </TrysteroProvider>
      </JotaiProvider>
    </>
  );
}

export default trpc.withTRPC(App);
