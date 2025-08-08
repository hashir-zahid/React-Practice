import React, { useState } from "react";
import "./App.css"; // Import the external CSS

export default function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [rolling, setRolling] = useState(false);

  const diceEmojis = ["", "1️", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣"];

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);

    setTimeout(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      setDice1(newDice1);
      setDice2(newDice2);
      setRolling(false);
    }, 500);
  };

  return (
    <div className="container">
      <h1 className="heading">🎲 Dice Roller</h1>

      <div className="dice-box">
        <span className="dice">{diceEmojis[dice1]}</span>
        <span className="dice">{diceEmojis[dice2]}</span>
      </div>

      <h2 className="sum">Total: {dice1 + dice2}</h2>

      <button className="roll-button" onClick={rollDice} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll the Dice 🎲"}
      </button>
    </div>
  );
}
