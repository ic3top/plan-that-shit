import {useEffect, useState} from "react";
import {formatTime} from "../utils/formTime";

export const Timer = ({ className }) => {
  const [secs, setSecs] = useState(Date.now())
  useEffect(() => {
    const interval = setInterval(() => setSecs(Date.now()), 1000)
    return () => clearInterval(interval);
  });

  return <span className={className}>{formatTime(new Date(secs))}</span>;
}
