import React from "react"
import { Box, BoxProps, Icon, IconButton, useTheme } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import { useTrysteroRoom } from "@/utils/hooks/useTrysteroRoom"
import PeerCursor from "./PeerCursor"
import usePeerCursor from "@/utils/hooks/usePeerCursor"
import FloatingActionButtons from "./FloatingActionButton"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

const PageLayout: React.FC<BoxProps> = ({ children, ...restProps }) => {
  const { peers, room } = useTrysteroRoom()
  const positions = usePeerCursor(room)
  const theme = useTheme()

  return (
    <Box
      as="main"
      position="relative"
      overflow="hidden"
      minH="calc(100vh - 80px)"
      color={theme.colors.white}
      bgColor={theme.colors.brand[700]}
      {...restProps}
    >
      <Navbar />
      {children}

      {peers.map((peer) => {
        return (
          <PeerCursor key={peer} peerId={peer} position={positions[peer]} />
        )
      })}

      <FloatingActionButtons>
        <IconButton
          as="a"
          href="https://github.com/sonroyaalmerol"
          target="_blank"
          borderRadius="full"
          aria-label="Github"
          colorScheme="whiteAlpha"
          color={theme.colors.white}
          icon={<Icon as={FaGithub} />}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/sonroyaalmerol/"
          target="_blank"
          borderRadius="full"
          aria-label="LinkedIn"
          colorScheme="whiteAlpha"
          color={theme.colors.white}
          icon={<Icon as={FaLinkedin} />}
        />
        <IconButton
          as="a"
          href="mailto:me@snry.xyz"
          target="_blank"
          borderRadius="full"
          aria-label="Mail"
          colorScheme="whiteAlpha"
          color={theme.colors.white}
          icon={<Icon as={GrMail} />}
        />
      </FloatingActionButtons>
    </Box>
  )
}

export default PageLayout