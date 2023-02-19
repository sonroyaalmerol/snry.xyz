import React from 'react';

import {
  Box, Heading, Text, VStack,
  useTheme,
} from '@chakra-ui/react';
import SearchBar from '@/components/SearchBar';
import { TypeAnimation } from 'react-type-animation';

const Landing: React.FC = () => {
  const theme = useTheme();

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
          <Heading textAlign="center">
            Son Roy Almerol 👑
          </Heading>
          <Text textAlign="center">
            Software Consultant |
            {' '}
            <TypeAnimation
              sequence={[
                'Full-stack',
                2000,
                'Frontend',
                1000,
                'Backend',
                1000,
                'React',
                1000,
                'Node',
                1000,
                'Javascript',
                1000,
              ]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
            />
            {' '}
            Developer
          </Text>
        </VStack>
        <VStack>
          <Text fontSize="sm" textAlign="center">What are you looking to build?</Text>
          <SearchBar w={{ base: '80vw', md: '60vw' }} />
        </VStack>
      </VStack>
    </Box>
  );
};

export default Landing;
