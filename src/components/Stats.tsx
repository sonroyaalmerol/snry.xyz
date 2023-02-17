import { useTrysteroRoom } from "@/utils/hooks/useTrysteroRoom"
import { Box, BoxProps, HStack, Hide, VStack, Text } from "@chakra-ui/react"
import React from "react"

const Stats: React.FC<BoxProps> = ({ children, ...restProps }) => {
  const { peers } = useTrysteroRoom()

  return (
    <Box as="footer" position="fixed" bottom="0" left="0" padding="2rem" {...restProps}>
      <VStack align="baseline">
        <Text fontSize="xs">Current visitors: {peers.length}</Text>
      </VStack>
    </Box>
  )
}

export default Stats