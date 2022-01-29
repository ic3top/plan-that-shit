import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRoom } from '../../hooks/useRoom';
import { Cards } from './Cards';
import { Board } from './users/Board';
import { UsernameModal } from '../../components/modals/UsernameModal';
import { Actions } from './Actions';
import { RevealAwarenessModal } from '../../components/modals/RevealAwarenessModal';

export function Room() {
  const { roomId } = useParams();
  const [usernameModalShown, setUsernameModalShown] = useState(true);
  const [awarenessModalShown, setAwarenessModalShown] = useState(false);
  const [username, setUsername] = useState('');
  const {
    room, users, votes, isVoting, performEstimation, reveal, startVoting,
  } = useRoom(roomId, username);

  const onRevealAction = () => {
    if (!users.every(({ name }) => votes.some((vote) => vote.user === name))) {
      return setAwarenessModalShown(true);
    }

    return reveal();
  };

  return (
    <div className="px-10 py-10 flex flex-col justify-between height-screen">
      <Board storyName={room?.currentEstimation?.storyName} users={users} isVoting={isVoting} votes={votes} />
      <Actions reveal={onRevealAction} startVoting={startVoting} isVoting={isVoting} />
      <Cards isVoting={isVoting} estimate={performEstimation} />
      <UsernameModal isOpen={usernameModalShown} setIsOpen={setUsernameModalShown} setUsername={setUsername} />
      <RevealAwarenessModal isOpen={awarenessModalShown} setIsOpen={setAwarenessModalShown} reveal={reveal} />
    </div>
  );
}
