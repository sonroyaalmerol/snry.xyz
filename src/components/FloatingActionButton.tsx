import {
  Box, BoxProps, HStack, VStack,
} from '@chakra-ui/react';
import React from 'react';

const FloatingActionButtons: React.FC<BoxProps> = ({ children, ...restProps }) => (
  <Box as="footer" position="fixed" bottom="0" right="0" padding="2rem" {...restProps}>

    <VStack display={{ base: 'none', md: 'flex' }} spacing={4}>
      {children}
    </VStack>
    <HStack display={{ base: 'flex', md: 'none' }}>
      {children}
    </HStack>
  </Box>
);

export default FloatingActionButtons;
