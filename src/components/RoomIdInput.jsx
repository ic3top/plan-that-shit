import InputMask from 'react-input-mask';
import React from 'react';

export function RoomIdInput({ value, onChange }) {
  return (
    <InputMask
      mask="aaa-aaa-aaa-aaa"
      value={value}
      onChange={onChange}
      placeholder="xxx-xxx-xxx-xxx"
    >
      {(inputProps) => <input {...inputProps} id="roomId" className="w-80 pt-2 pl-1 pr-4 rounded-sm border-b-2 text-lg focus:border-blue-400" />}
    </InputMask>
  );
}
