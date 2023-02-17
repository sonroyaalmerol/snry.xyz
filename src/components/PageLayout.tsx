import React from "react"
import { Box, BoxProps, Icon, IconButton, useTheme } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import { useTrysteroRoom } from "@/utils/hooks/useTrysteroRoom"
import PeerCursor from "@/components/PeerCursor"
import usePeerCursor from "@/utils/hooks/usePeerCursor"
import FloatingActionButtons from "@/components/FloatingActionButton"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { motion } from "framer-motion"

const PageLayout: React.FC<BoxProps> = ({ children, ...restProps }) => {
  const { peers, room } = useTrysteroRoom()
  const positions = usePeerCursor(room)
  const theme = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Box
        as="main"
        position="relative"
        overflow="hidden"
        minH="100vh"
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
    </motion.div>
  )
}

export default PageLayout