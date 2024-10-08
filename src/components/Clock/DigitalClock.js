import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    // const intervalTime = setInterval(() => {
    //   setTime(new Date());
    // }, 1000);
    return () => {
      //   clearInterval(intervalTime);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let format = hours >= 12 ? "PM" : "AM";
    return `${hours} : ${mins} : ${secs} ${format}`;
  };

  return (
    <>
      {/* {console.log(formatTime())} */}
      {/* <h1>Hello {formatTime()}</h1> */}
    </>
  );
}

export default DigitalClock;
