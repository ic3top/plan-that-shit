const NOTIFICATION = 'notification';
const USERS = 'users';
const CONNECTION = 'connection';
const ESTIMATION_DONE = 'estimation:done';
// reserved for transport level errors
const ERROR = 'error';
// custom exceptions
const EXCEPTION = 'exception';
const ROOM = 'room';

const JOIN = 'join';
const ESTIMATE = 'estimate';
const REVEAL = 'reveal';
const START = 'start';

export const EMIT = {
  JOIN,
  ESTIMATE,
  REVEAL,
  START
}

export const ON = {
  NOTIFICATION,
  USERS,
  ROOM,
  ESTIMATION_DONE,
  CONNECTION,
  ERROR,
  EXCEPTION
}

