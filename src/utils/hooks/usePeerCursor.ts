import React from 'react'

import type { Room } from 'trystero'

const usePeerCursor = (room: Room | null) => {
  const [cursor, setCursor] = React.useState<{ [peerId: string]: [number, number] }>({})

  React.useEffect(() => {
    if (room !== null) {
      try {
        const [sendCursor, getCursor] = room.makeAction(`cursor-move`.slice(0, 12))
      
        window.addEventListener('mousemove', (e) => {
          const xPercent = (e.clientX / window.innerWidth) * 100
          const yPercent = (e.clientY / window.innerHeight) * 100
          sendCursor([`${xPercent}%`,`${yPercent}%}`])
        })

        getCursor(([x, y]: any, peerId) => {
          setCursor((cursor) => ({ ...cursor, [peerId]: [x, y] }))
        })
      } catch (e: any) {
        if (!e.message.includes('already registered')) console.error(e)
      }
      
    }
  }, [room])

  return cursor
}

export default usePeerCursor