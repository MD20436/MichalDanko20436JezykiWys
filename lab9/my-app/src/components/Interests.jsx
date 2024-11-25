import React from "react";

const Interests = () => {
  const interests = ["Programowanie", "Muzyka", "Podróże", "Sport"];

  return (
    <div className="container">
      <h1>Moje zainteresowania</h1>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
