import React from 'react';

import type { Room } from 'trystero';

const usePeerClick = (
  room: Room | null,
  onClick: (peerId: string, position: [number, number]) => void,
) => {
  React.useEffect(() => {
    if (room !== null) {
      try {
        const [sendClick, getClick] = room.makeAction('click');

        window.addEventListener('click', (e) => {
          sendClick([e.clientX, e.clientY]);
        });

        getClick(([x, y]: any, peerId) => {
          onClick(peerId, [x, y]);
        });
      } catch (e: any) {
        // if (!e.message.includes('already registered')) console.error(e);
      }
    }
  }, [room, onClick]);
};

export default usePeerClick;
