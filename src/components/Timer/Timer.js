import React, { useEffect, useState } from "react";
import "./Timer.css";
import { CircularProgress } from "@mui/material";

const Timer = ({ datetime }) => {
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const getTimeRemaining = () => {
      const auctionStartTime = new Date(datetime);
      const currentTime = new Date();
      const difference = auctionStartTime - currentTime;

      if (difference < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    };

    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [datetime]);

  return (
    <div className="timer_block">
      <p className="timer">
        {!timeRemaining ? (
          <CircularProgress color="orange" size={20} />
        ) : (
          <>
            <span>{timeRemaining.days} days</span>{" "}
            <span>{timeRemaining.hours} hours</span>
            <span>{timeRemaining.minutes} minutes</span>{" "}
            <span>{timeRemaining.seconds} seconds</span>
          </>
        )}
      </p>
    </div>
  );
};

export default Timer;
