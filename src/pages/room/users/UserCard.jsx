import './userCard.css'
import React from 'react';
import {Loader} from "../../../components/loader/Loader";
import {MdDone} from "react-icons/all";
import classNames from "classnames";

export const UserCard = ({ name, votes, isVoting }) => {
  const userVote = votes.find(({ user }) => user === name);
  console.log(userVote);
  const votingViewClasses = classNames("border-4 w-full rounded-md border-blue-400 h-full flex items-center justify-center", {
    "bg-blue-400": userVote && isVoting,
    "bg-blue-400 text-3xl text-white font-bold": !isVoting
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={votingViewClasses}>
        {isVoting && userVote && <MdDone color={"white"} size={80} />}
        {isVoting && !userVote && <Loader />}
        {!isVoting && userVote && userVote.points}
        {!isVoting && !userVote && '?'}
      </div>
      <span className="user-name">{name}</span>
    </div>
  );
};