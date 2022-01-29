import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import { ON, EMIT } from '../constants/webSocket-events';
import { CustomToast } from '../components/CustomToast';

const SERVER_URL = import.meta.env.VITE_API_LINK;

export const useRoom = (roomId, username) => {
  const [users, setUsers] = useState([]);
  const [votes, setVotes] = useState([]);
  const [room, setRoom] = useState({});

  const [userId] = useState(nanoid(8));

  const socketRef = useRef(null);

  useEffect(() => {
    if (!username || !roomId) return;

    socketRef.current = io(SERVER_URL, {
      transports: ['websocket'],
      query: {
        roomId,
        username,
        userId,
      },
    });

    socketRef.current.on(ON.ROOM, (emittedRoom) => {
      setRoom(emittedRoom);
      setVotes(emittedRoom.currentEstimation?.votes || []);
    });
    socketRef.current.on(ON.NOTIFICATION, (notification) => {
      toast.custom((t) => <CustomToast t={t} title={notification.title} description={notification.description} />);
    });
    socketRef.current.on(ON.USERS, setUsers);

    socketRef.current.emit(EMIT.JOIN, { username, userId });

    toast.custom((t) => (
      <CustomToast
        t={t}
        title="Connected"
        description={(
          <>
            Connected to
            <span className="tracking-wider font-medium p-1">{roomId}</span>
            . Happy planning 🎉
          </>
        )}
      />
    ));

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, username]);

  const performEstimation = (points) => {
    socketRef.current.emit(EMIT.ESTIMATE, { points, userId });
  };

  const reveal = () => {
    socketRef.current.emit(EMIT.REVEAL, { votes, storyName: socketRef.current.storyName });
  };

  const startVoting = (storyName = 'Story name...') => {
    socketRef.current.emit(EMIT.START, { storyName });
    socketRef.current.storyName = storyName;
  };

  return {
    users, votes, isVoting: room.estimationInProgress, room, performEstimation, reveal, startVoting,
  };
};
