import React from 'react';
import NextLink from 'next/link';

import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

type LinkProps = ChakraLinkProps & {
  href: string
};

const Link: React.FC<LinkProps> = ({ children, href, ...props }) => (
  <ChakraLink as={NextLink} href={href} {...props}>
    {children}
  </ChakraLink>
);

export default Link;
