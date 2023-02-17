import React from 'react'

import { 
  Box,
  IconButton,
  Flex,
  Heading,
  Hide,
  HStack,
  Spacer,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'

import Link from '@/components/Link'
import { HamburgerIcon } from '@chakra-ui/icons'

interface NavbarProps {

}

const navbarMenus = [
  <Link key="/home" href="/">#home</Link>,
  <Link key="/projects" href="/projects">#projects</Link>,
  <Link key="/resume" href="/resume">#resume</Link>
]

const Navbar: React.FC<NavbarProps> = () => {
  const theme = useTheme()
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <Box
      as="nav"
      w="100%"
      position="absolute"
      bgColor={theme.colors.brand[700]}
      color={theme.colors.white}
      p={4}
      px={8}
    >
      <Flex>
        <Heading>snry.xyz</Heading>
        <Spacer />
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }} >
          {navbarMenus}
        </HStack>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          ref={btnRef}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          aria-label="Open navbar drawer"
          variant="ghost"
          color={theme.colors.white}
          colorScheme="whiteAlpha"
          borderRadius="50%"
        />
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent color={theme.colors.white} bgColor={theme.colors.brand[700]}>
          <DrawerBody m="1rem">
            <VStack align="end" spacing={4}>
              {navbarMenus}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Navbar