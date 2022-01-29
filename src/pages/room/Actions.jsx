import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { StoryNameModal } from '../../components/modals/StoryNameModal';

export function Actions({ reveal, startVoting, isVoting }) {
  const [modalShown, setModalShown] = useState(false);

  return (
    <>
      <StoryNameModal isOpen={modalShown} setIsOpen={setModalShown} startVoting={startVoting} />
      {
        isVoting
          ? <Button bordered onClick={reveal} className="w-1/2 mx-auto">REVEAL</Button>
          : <Button bordered onClick={() => setModalShown(true)} className="w-1/2 mx-auto">Start Voting</Button>
      }
    </>
  );
}
