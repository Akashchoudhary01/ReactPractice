import React, { useState } from "react";
import Card from "../Cards/Card";
import isWinner from "../Helper/checkWinner";

export default function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); //if value true = 0 , false = x;
  const [winner , setWinner] = useState(null);

  function play(index){
    if(turn == true){
        board[index] = "o"
    }else{
        board[index] = "x";
    }

    //check for the winner
    const win = isWinner(board , turn ? "o" : "x");
    if(win){
        setWinner(win);

    }
    setBoard([...board]);
    setTurn(!turn);
  }

  function reset(){
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }

  return (
    <div>
      <h1 className=" ">Current turn {turn ? "o" : "x"}</h1>
      {
        winner && (
            <>
            <h1>Winner is {winner}</h1>
            <button onClick={reset} className=" p-1 outline-1 outline-black rounded-r-lg">Reset</button>
            </>
        )
      }

      <div
        className="grid grid-cols-3 grid-rows-3 gap-2
                 p-2 rounded-lg"
      >
        {board.map((el, idx) => (
          <Card key={idx} gameEnd={winner ? true : false} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}
