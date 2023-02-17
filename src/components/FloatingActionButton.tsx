import { Box, BoxProps, HStack, Hide, VStack } from "@chakra-ui/react"
import React from "react"

const FloatingActionButtons: React.FC<BoxProps> = ({ children, ...restProps }) => {
  return (
    <Box as="footer" position="fixed" bottom="0" right="0" padding="2rem" {...restProps}>
      <Hide below='md'>
        <VStack spacing={4}>
          {children}
        </VStack>
      </Hide>
      <Hide above='md'>
        <HStack>
          {children}
        </HStack>
      </Hide>
    </Box>
  )
}

export default FloatingActionButtons