import React from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/all';
import { Modal } from './Modal';
import { Button } from '../Button';

export function RevealAwarenessModal({ isOpen, setIsOpen, reveal }) {
  const onReveal = () => {
    setIsOpen(false);
    reveal();
  };

  return (
    <Modal
      isOpen={isOpen}
      title={(
        <span className="flex items-center gap-2 text-yellow-500">
          <BsFillExclamationTriangleFill size={28} />
          {' '}
          Not everyone voted
        </span>
)}
      message={
        "Be aware, not everyone voted. Their estimates will not be taken into account and will be represented as '?' - question mark."
      }
      actions={(
        <>
          <Button outline onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button outline onClick={onReveal}>Reveal anyway</Button>
        </>
      )}
    />
  );
}
