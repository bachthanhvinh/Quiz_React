import { set } from "lodash";
import { useEffect, useState } from "react";
import "../DetailQuiz.scss";
const CountDown = (props) => {
  const { timeOut, time, setTime } = props;

  useEffect(() => {
    if (time === 0) {
      timeOut();
      return;
    }
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const toHHMMSS = (secs) => {
    const sec_num = parseInt(secs, 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor(sec_num / 60) % 60;
    const seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };
  return (
    <>
      <div className="CountDownTime">{toHHMMSS(time)}</div>
    </>
  );
};

export default CountDown;
