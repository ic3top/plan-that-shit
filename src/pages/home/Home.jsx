import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  AiOutlineRise, BiPlanet, BiRocket, IoMdExit,
} from 'react-icons/all';
import { usePost } from '../../hooks/usePost';
import { Button } from '../../components/Button';
import { NewRoomModal } from '../../components/modals/NewRoomModal';
import { uuid } from '../../utils/nanoid';
import { AnimatedBg } from './AnimatedBg';
import { RoomIdInput } from '../../components/RoomIdInput';

export function Home() {
  const navigateTo = useNavigate();
  const [modalShown, setModalShown] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [res, createRoom] = usePost(`${import.meta.env.VITE_API_LINK}/api/room/${uuid()}`);

  return (
    <>
      <div>
        <NewRoomModal
          isOpen={modalShown}
          setIsShown={setModalShown}
          roomId={res?.data?.roomId}
          loading={res.isLoading}
        />
        <div className="mt-16 pl-12 flex flex-col justify-between" style={{ height: '75vh' }}>
          <div>
            <ul>
              <li className="text-3xl font-medium flex items-center gap-4">
                <BiPlanet color="#2196F3" size={30} />
                Play online anywhere with your team
              </li>
              <li className="text-3xl font-medium mt-8 flex items-center gap-4">
                <BiRocket color="#2196F3" size={30} />
                Set up room in Seconds
              </li>
              <li className="text-3xl font-medium mt-8 flex items-center gap-4">
                <AiOutlineRise color="#2196F3" size={30} />
                Estimate as an Expert
              </li>
            </ul>
            <Button
              base
              className="w-80 mt-8 ml-8 text-xl"
              onClick={() => {
                createRoom();
                setModalShown(true);
              }}
            >
              Create New Room
            </Button>
          </div>
          <div className="flex flex-col ml-8 mt-20">
            <label htmlFor="roomId" className="text-sm text-gray-500">Already have a room?</label>
            <RoomIdInput value={roomId} onChange={(e) => setRoomId(e.target.value)} />
            <Button withIcon base className="w-80 mt-2 text-xl" onClick={() => navigateTo(`/${roomId}`)}>
              Join
              <IoMdExit size={24} />
            </Button>
          </div>
        </div>
      </div>

      <AnimatedBg />
    </>
  );
}
