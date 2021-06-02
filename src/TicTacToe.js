import { useContext, useState } from "react";
import { BoardContext } from "./App";
import produce from "immer";

function TicTacToe() {
  let { board, setBoard } = useContext(BoardContext);
  let [player, setPlayer] = useState(0);
  let check = (board) =>{
    if (
      (board[0][0] === board[0][1] &&
        board[0][1] === board[0][2] &&
        board[0][2] === player) ||
      (board[1][0] === board[1][1] &&
        board[1][1] === board[1][2] &&
        board[1][2] === player) ||
      (board[2][0] === board[2][1] &&
        board[2][1] === board[2][2] &&
        board[2][2] === player) ||
      (board[0][0] === board[1][0] &&
        board[1][0] === board[2][0] &&
        board[2][0] === player) ||
      (board[0][1] === board[1][1] &&
        board[1][1] === board[2][1] &&
        board[2][1] === player) ||
      (board[0][2] === board[1][2] &&
        board[1][2] === board[2][2] &&
        board[2][2] === player) ||
      (board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[2][2] === player) ||
      (board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[2][0] === player)
    ) {
      alert(player + " won");
      
      return player;

    } else{
      return null;
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100Vw",
        height: "100Vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <p>{player}'s Turn</p>
      
      
      {board.map(function (row, rowIndex) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {row.map(function (item, colIndex) {
              return (
                <button
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  onClick={function () {
                    const updated = produce(board, (draftState) => {
                      if (draftState[rowIndex][colIndex] === -1) {
                        draftState[rowIndex][colIndex] = player;
                      }
                    });
                    setBoard(updated);
                    setPlayer(player === 0 ? 1 : 0);
                    let result = check(updated);
                    
                    
                    
                    // console.log(result);
                    

                    
                  }}
                >
                  
                  {item === -1 ? " " : item}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default TicTacToe;
