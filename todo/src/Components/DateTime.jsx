import React, { useEffect, useState } from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return ()=> clearInterval(interval)
  }, []);

  return (
    <div>
      <h2 className="text-white p-3 text-xl mb-2">{dateTime}</h2>
    </div>
  );
}
