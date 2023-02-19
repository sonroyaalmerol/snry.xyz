import { useRouter } from 'next/router';
import React from 'react';

import type { Room } from 'trystero';

const CONFIG = {
  appId: 'snry.xyz',
};

const TrysteroContext = React.createContext<{
  peers: string[],
  status: 'idle' | 'joining' | 'joined',
  room: Room | null,
  selfId: string | null
}>({
  peers: [],
  status: 'idle',
  room: null,
  selfId: null,
});

export function TrysteroProvider({ children }: { children: React.ReactNode }) {
  const { asPath } = useRouter();

  const [peers, setPeers] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<'idle' | 'joining' | 'joined'>('idle');
  const [selfId, setSelfId] = React.useState<string | null>(null);

  const room: React.MutableRefObject<Room | null> = React.useRef(null);

  React.useEffect(() => {
    setStatus('joining');
    import('trystero').then(({ joinRoom, selfId: trysteroId }) => {
      try {
        room.current = joinRoom(CONFIG, asPath);
      } catch (e: any) {
        // if (!e.message.includes('already joined')) console.log(e.message);
      }
      setStatus('joined');

      setSelfId(trysteroId);

      room.current?.onPeerJoin((peerId: string) => {
        setPeers((currPeers) => [...currPeers, peerId]);
      });

      room.current?.onPeerLeave((peerId: string) => {
        setPeers((currPeers) => currPeers.filter((peer) => peer !== peerId));
      });
    });

    return () => {
      if (room.current) room.current.leave();
      setPeers([]);
      setStatus('idle');
    };
  }, [asPath]);

  const providerValue = React.useMemo(() => ({
    peers,
    status,
    selfId,
    room: room.current,
  }), [peers, status, selfId]);

  return (
    <TrysteroContext.Provider value={providerValue}>
      {children}
    </TrysteroContext.Provider>
  );
}

export const useTrysteroRoom = () => React.useContext(TrysteroContext);
