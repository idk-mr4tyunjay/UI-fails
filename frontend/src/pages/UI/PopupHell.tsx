import React, { useEffect, useState } from "react";

const PopupHell: React.FC = () => {
  const [popups, setPopups] = useState<number[]>([]);

  const getRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 80)}vh`,
    left: `${Math.floor(Math.random() * 80)}vw`,
  });

  const createPopup = () => {
    setPopups((prevPopups) => [...prevPopups, prevPopups.length]);
  };

  useEffect(() => {
    const interval = setInterval(createPopup, Math.random() * 1500 + 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <h1 className="text-3xl font-bold mb-8">Welcome to Popup Hell!</h1>

      {popups.map((popup) => (
        <div
          key={popup}
          className="popup bg-white shadow-lg rounded-lg p-4 absolute border border-gray-300"
          style={getRandomPosition()}
        >
          <h2 className="text-xl font-semibold">Popup {popup + 1}</h2>
          <p className="text-gray-700">This is popup #{popup + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default PopupHell;
