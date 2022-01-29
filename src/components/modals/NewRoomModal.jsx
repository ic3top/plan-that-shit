import React from 'react';
import { IoCopy, IoMdExit } from 'react-icons/all';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../loader/Loader';
import { Button } from '../Button';
import { Modal } from './Modal';

export function NewRoomModal({
  isOpen, setIsShown, roomId, loading,
}) {
  const navigateTo = useNavigate();
  const roomLink = `${window.location.origin}/${import.meta.env.VITE_BASE_ROUTE}/${roomId}`;

  const copyLink = () => {
    toast.promise(navigator.clipboard.writeText(roomLink), {
      pending: 'Coping...',
      success: 'Copied to clipboard 👌',
      error: 'Rejected 🤯',
    });
  };

  const RoomIdView = loading
    ? <Loader className="mt-6 py-2" />
    : (
      <div className="relative mt-6" onClick={copyLink}>
        <div className="py-2 pl-4 pr-8 bg-blue-50 hover:bg-blue-100 text-lg cursor-read overflow-x-auto whitespace-nowrap">{roomLink}</div>
        <button aria-label="copy to clipboard" className="absolute right-2 top-3"><IoCopy size={22} /></button>
      </div>
    );

  return (
    <Modal
      isOpen={isOpen}
      title="Room created!"
      message="Your room link created, now send it to all of your team members to invite them. Also, you might want to save it for the future."
      content={RoomIdView}
      actions={(
        <>
          <Button outline onClick={() => setIsShown(false)}>CANCEL</Button>
          <Button withIcon outline onClick={() => navigateTo(`/${roomId}`)} disabled={loading}>
            JOIN
            <IoMdExit size={24} />
          </Button>
        </>
      )}
    />
  );
}
