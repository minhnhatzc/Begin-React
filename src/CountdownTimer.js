import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(60);
  useEffect(() => {
    if (secondsLeft > 0) {
      setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
    }
  }, [secondsLeft]);
  return (
    <div>
      {secondsLeft === 0 ? (
        <p>Time' s up!</p>
      ) : (
        <p>Seconds left: {secondsLeft}</p>
      )}
    </div>
  );
}
