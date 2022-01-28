import React from "react";
import './users.css';
import {UserCard} from "./UserCard";

export const Board = ({ users, votes, isVoting, storyName }) => (
  <>
    <div className="app-board">
      <div className="app-story-block bg-blue-400 rounded-md text-white font-bold text-3xl flex items-center justify-center p-2">
        <h2>{ storyName ? storyName : "Start voting" }</h2>
      </div>
      {
        users.map(({ name, id }) =>
          <UserCard key={id} name={name} isVoting={isVoting} votes={votes} />)
      }
    </div>
  </>
)
