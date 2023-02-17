import React from 'react'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import SearchBar from '@/components/SearchBar'

const Landing: React.FC = () => {
  const theme = useTheme()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="calc(100vh - 80px)"
      bgColor={theme.colors.brand[700]}
      color={theme.colors.white}
    >
      <VStack spacing={8}>
        <VStack>
          <Heading>
            Son Roy Almerol
          </Heading>
          <Text>Full-Stack Developer</Text>
        </VStack>
        <VStack>
          <Text fontSize="sm">What are you looking to build?</Text>
          <SearchBar w={{ base: '80vw', md: '60vw' }} />
        </VStack>
      </VStack>
    </Box>
  )
}

export default Landing