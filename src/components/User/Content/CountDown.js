import { useEffect, useState } from "react";

const CountDown = (props) => {
  const { timeOut } = props;
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      timeOut()
      return;
    }
    const times = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(times);
    };
  }, [count]);
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
      <div>{toHHMMSS(count)}</div>
    </>
  );
};

export default CountDown;
