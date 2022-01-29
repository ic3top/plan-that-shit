import React, { useState } from 'react';
import { GiSaveArrow } from 'react-icons/all';
import { Modal } from './Modal';
import { Button } from '../Button';

const isValidNumber = (n) => n > 0 && n < 100;

export function NewCardModal({ isOpen, setIsOpen, onSave }) {
  const [points, setPoints] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    onSave(points);
    setPoints('');
  };
  return (
    <Modal
      isOpen={isOpen}
      title="Create new planning card"
      message="You will be able to to use that card after saving to estimate stories in the future."
      content={(
        <form id="points-form" onSubmit={onSubmit}>
          <div className="px-4 mt-4 flex items-center justify-center h-44 w-36 rounded bg-blue-400 mr-auto ml-auto shadow-md">
            <input
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              id="points"
              type="number"
              max={100}
              min={0}
              className="w-full text-8xl font-medium bg-blue-400 text-white"
            />
          </div>
          <label htmlFor="points" className="text-gray-400 font-semibold block text-center mt-1">Input integer between 0 and 100</label>
        </form>
      )}
      actions={(
        <>
          <Button outline onClick={() => setIsOpen(false)}>CANCEL</Button>
          <Button type="submit" form="points-form" withIcon outline disabled={!isValidNumber(points)}>
            SAVE
            <GiSaveArrow size={24} />
          </Button>
        </>
      )}
    />
  );
}
