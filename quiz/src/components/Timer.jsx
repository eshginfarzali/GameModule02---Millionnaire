import { useEffect, useState } from "react";
import useSound from "use-sound"
import wait from "../sounds/wait.mp3"



export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);
  const [waitAnswer]= useSound(wait)

  useEffect(() => {
    waitAnswer();
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return()=>clearInterval(interval)
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return timer;
}
