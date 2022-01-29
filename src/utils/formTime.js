import dayjs from 'dayjs';

export const formatTime = (date) => dayjs(date).format('h:mm:ss A. MMM D');
