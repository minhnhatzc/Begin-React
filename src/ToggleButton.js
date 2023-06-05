import React, { useState } from "react";

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <button onClick={handleClick}>{isToggled ? "On" : "Off"}</button>
    </div>
  );
}
