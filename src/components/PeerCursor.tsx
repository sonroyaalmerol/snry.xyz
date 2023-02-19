import {
  Box, Text, useTheme, VStack,
} from '@chakra-ui/react';
import React from 'react';

const generateRandomColor = (seed: string): string => {
  // Generate a random number based on the seed
  const randomNumber = parseInt(
    Math.floor(Math.abs(Math.sin(seed.charCodeAt(0)) * 16777215)).toString(),
    10,
  );

  // Convert the number to a 6-digit hex color string
  const hexColor = `#${randomNumber.toString(16).padStart(6, '0')}`;

  return hexColor;
};

interface PeerCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  peerId: string,
  position: [number, number]
}

const PeerCursor: React.FC<PeerCursorProps> = ({ peerId, position, ...restProps }) => {
  const theme = useTheme();

  return (
    <Box
      position="absolute"
      left={position ? position[0] : '0%'}
      top={position ? position[1] : '0%'}
    >
      <VStack spacing={1}>
        <Box
          w="10px"
          h="10px"
          borderRadius="50%"
          bgColor={generateRandomColor(peerId)}
          {...restProps}
        />
        <Text color={theme.colors.white} fontSize="xs">
          Visitor:
          {peerId.slice(0, 4)}
        </Text>
      </VStack>

    </Box>
  );
};

export default PeerCursor;
