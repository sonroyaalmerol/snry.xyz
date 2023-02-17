import { useTrysteroRoom } from "@/utils/hooks/useTrysteroRoom"
import { Box, BoxProps, VStack, Text } from "@chakra-ui/react"
import React from "react"

const Stats: React.FC<BoxProps> = ({ children, ...restProps }) => {
  const { peers } = useTrysteroRoom()

  return (
    <Box as="footer" position="fixed" bottom="0" left="0" padding="2rem" {...restProps}>
      <VStack align="baseline">
        <Text fontSize="xs" maxW="50vw">Everyone on this page will be able to connect to others in real-time, synchronising mouse movements.</Text>
        <Text fontSize="xs">Page Visitor Count: {peers.length + 1}</Text>
      </VStack>
    </Box>
  )
}

export default Stats