import React, { useEffect, useState } from "react";

function RockPaperScissor() {
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const initiateGame = (e) => {
    setUserChoice(e.target.value);
    const choices = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() * 3);
    setCompChoice(choices[rand]);
  };
  useEffect(() => {
    if (compChoice && userChoice) {
      if (userChoice == compChoice) return;
      if (
        (userChoice == "rock" && compChoice == "scissor") ||
        (userChoice == "scissor" && compChoice == "paper") ||
        (userChoice == "paper" && compChoice == "rock")
      )
        setUserScore((prev) => prev + 1);
      else setCompScore((prev) => prev + 1);
    }
  }, [userChoice, compChoice]);
  return (
    <>
      <h1 className="text-5xl uppercase text-yellow-400 font-bold text-center font-mono mb-5">
        Rock Paper Scissor Game
      </h1>
      <div className="flex w-1/2 mb-5 mx-auto justify-evenly">
        <button
          className="px-2 py-1 w-28 rounded-md bg-green-600 text-white font-bold uppercase mr-3"
          value="rock"
          onClick={initiateGame}
        >
          rock
        </button>
        <button
          className="px-2 py-1 w-28 rounded-md bg-green-600 text-white font-bold uppercase mr-3"
          value="paper"
          onClick={initiateGame}
        >
          paper
        </button>
        <button
          className="px-2 py-1 w-28 rounded-sm bg-green-600 text-white font-bold uppercase mr-3"
          value="scissor"
          onClick={initiateGame}
        >
          scissor
        </button>
      </div>
      <p className="text-center text-3xl text-brown-500 capitalize ">
        Your Choice: {userChoice}
      </p>
      <p className="text-center text-3xl text-brown-500 capitalize ">
        Comp Choice: {compChoice}
      </p>
      <p className="text-center text-3xl text-brown-500 capitalize ">
        Your Score: {userScore}
      </p>
      <p className="text-center text-3xl text-brown-500 capitalize ">
        Computer Score: {compScore}
      </p>
    </>
  );
}

export default RockPaperScissor;
