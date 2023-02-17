import { useRouter } from 'next/router'
import React from 'react'

import type { Room } from 'trystero'

const CONFIG = {
  appId: 'snry.xyz',
}

const TrysteroContext = React.createContext<{
  peers: string[],
  status: 'idle' | 'joining' | 'joined',
  room: Room | null,
  selfId: string | null
}>({
  peers: [],
  status: 'idle',
  room: null,
  selfId: null
})

export const TrysteroProvider = ({ children }: { children: React.ReactNode }) => {
  const { asPath } = useRouter()

  const [peers, setPeers] = React.useState<string[]>([])
  const [status, setStatus] = React.useState<'idle' | 'joining' | 'joined'>('idle')
  const [selfId, setSelfId] = React.useState<string | null>(null)

  let room: React.MutableRefObject<Room | null> = React.useRef(null)
  
  React.useEffect(() => {
    setStatus('joining')
    import('trystero').then(({ joinRoom, selfId }) => {
      try {
        room.current = joinRoom(CONFIG, asPath)
      } catch (e: any) {
        if (!e.message.includes('already joined')) console.log(e.message)
      }
      setStatus('joined')

      setSelfId(selfId)

      room.current?.onPeerJoin((peerId: string) => {
        setPeers((peers) => [...peers, peerId])
      })

      room.current?.onPeerLeave((peerId: string) => {
        setPeers((peers) => peers.filter((peer) => peer !== peerId))
      })
    })

    return () => {
      if (room.current) room.current.leave()
      setPeers([])
      setStatus('idle')
    }
  }, [asPath])
  

  return (
    <TrysteroContext.Provider value={{
      peers,
      status,
      selfId,
      room: room.current
    }}>
      {children}
    </TrysteroContext.Provider>
  );
}

export const useTrysteroRoom = () => {
  return React.useContext(TrysteroContext)
}