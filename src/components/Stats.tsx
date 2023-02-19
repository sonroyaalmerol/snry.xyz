import { useTrysteroRoom } from '@/utils/hooks/useTrysteroRoom';
import {
  Box, BoxProps, VStack, Text, Hide,
} from '@chakra-ui/react';
import React from 'react';

const Stats: React.FC<BoxProps> = ({ children, ...restProps }) => {
  const { peers } = useTrysteroRoom();

  return (
    <Box as="footer" position="fixed" bottom="0" left="0" padding="2rem" {...restProps}>
      <VStack align="baseline">
        <Text fontSize="xs" maxW="40vw">Everyone on this page will be able to connect to others in real-time, synchronising mouse movements.</Text>
        {peers.length === 0 ? (
          <Hide below="md">
            <Text fontSize="xs" maxW="40vw">
              You are currently the only person who has the page open,
              but you can cheat by opening this URL in another tab to see how it is with others.
            </Text>
          </Hide>
        ) : []}
        <Text fontSize="xs">
          Page Visitor Count:
          {peers.length + 1}
        </Text>
      </VStack>
    </Box>
  );
};

export default Stats;
