import React, {useState} from 'react';
import {Modal} from "./Modal";
import {IoMdExit} from "react-icons/all";
import {Button} from "../Button";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {containsSpecialChars} from "../../utils/containsSpecialChars";

export const UsernameModal = ({ isOpen, setIsOpen, setUsername }) => {
  const [value, setValue] = useLocalStorage('username', ' ');
  const [validationError, setValidationError] = useState('');

  const onJoin = () => {
    if(!value) return setValidationError('Name is required.')
    if(value.length < 3) return setValidationError('At least 4 characters.')
    if(value.length > 15) return setValidationError('No more than 15 characters allowed.')
    if(containsSpecialChars(value)) return setValidationError('Special characters are not allowed, use only letters and/or numbers.')

    setUsername(value);
    setIsOpen(false);
  }

  const inputBorder = validationError ? " border-red-400" : " focus:border-blue-400"

  return (
    <Modal
      isOpen={isOpen}
      title={"What's your name?"}
      message={"This name will be shown for all people in the room that you are trying to join. It is required."}
      content={
        <div className="flex flex-col items-center">
            <input
              className={"w-80 mt-4 rounded-sm border-b-2 text-lg" + inputBorder}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="MyName..."
            />
          <span className="text-sm text-red-400">{validationError}</span>
        </div>
      }
      actions={
        <Button autoFocus withIcon base className="w-full rounded-none rounded-b-lg hover:text-gray-200 text-xl" onClick={onJoin}>Join <IoMdExit size={24} /></Button>
      }
    />
  );
};
