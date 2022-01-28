import dayjs from "dayjs";

export const formatTime = (date) => {
  return dayjs(date).format('h:mm:ss A. MMM D')
}
