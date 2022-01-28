import React, {useState} from 'react';
import {Modal} from "./Modal";
import {Button} from "../Button";
import {containsSpecialChars} from "../../utils/containsSpecialChars";

export const StoryNameModal = ({ isOpen, setIsOpen, startVoting }) => {
  const [storyName, setStoryName] = useState('');
  const [validationError, setValidationError] = useState('');

  const inputBorder = validationError ? " border-red-400" : " focus:border-blue-400";

  const onStartVoting = () => {
    if(!storyName) return setValidationError('Name is required.')
    if(storyName.length < 3) return setValidationError('At least 4 characters.')
    if(storyName.length > 50) return setValidationError('No more than 50 characters allowed.')
    if(containsSpecialChars(storyName)) return setValidationError('Special characters are not allowed, use only letters and/or numbers.')

    startVoting(storyName);
    setIsOpen(false);
  }

  return (
    <Modal
     isOpen={isOpen}
     title={"Story name"}
     message="Provide the next story name to vote for."
     content={
       <div className="flex flex-col items-center py-4 px-16">
         <input
           className={"w-80 mt-4 rounded-sm border-b-2 text-lg" + inputBorder}
           type="text"
           value={storyName}
           onChange={(e) => setStoryName(e.target.value)}
           placeholder="Story Name..."
         />
         <span className="text-sm text-red-400">{validationError}</span>
       </div>
     }
     actions={
       <>
        <Button outline onClick={() => setIsOpen(false)}>Cancel</Button>
        <Button withIcon outline onClick={onStartVoting}>Start Voting</Button>
       </>
     }
    />
  );
};
