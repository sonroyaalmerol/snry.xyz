import React from "react"
import { Box, BoxProps, useTheme } from "@chakra-ui/react"
import { useTrysteroRoom } from "@/utils/hooks/useTrysteroRoom"
import PeerCursor from "@/components/PeerCursor"
import usePeerCursor from "@/utils/hooks/usePeerCursor"

const PageLayout: React.FC<BoxProps> = ({ children, ...restProps }) => {
  const { peers, room } = useTrysteroRoom()
  const positions = usePeerCursor(room)
  const theme = useTheme()

  return (
    <Box
      as="main"
      position="relative"
      overflow="hidden"
      minH="100vh"
      color={theme.colors.white}
      bgColor={theme.colors.brand[700]}
      {...restProps}
    >
      {children}

      {peers.map((peer) => {
        return (
          <PeerCursor key={peer} peerId={peer} position={positions[peer]} />
        )
      })}
    </Box>
  )
}

export default PageLayout