import { useState } from "react";

const board = [
{value: '1', isMine: false},
{value: '2', isMine: false},
{value: '3', isMine: false},
{value: '4', isMine: false},
{value: '5', isMine: false},
{value: '6', isMine: false},
{value: '7', isMine: false},
{value: '8', isMine: false},
]


export function MinesweeperPage() {
  const [board, setBoard] = useState<string[][]>([])
  // const [flags, setFlags] = useState<boolean[][]>([])
  // const [gameWon, setGameWon] = useState<boolean>(false)
  // const [gameLost, setGameLost] = useState(false)
  // const [time, setTime] = useState<number>(0)
  // const [gamePaused, setGamePaused] = useState(false)
  // const [isGameStarted, setIsGameStarted] = useState(false)
  // const [isGameOver, setIsGameOver] = useState(false)


  
  
  return (
    <div>
      <h1>Сапёр</h1>
      <div className="minesweeper-board">
        {board.map((item: string[], index: number) => {
          return (
            <div className="minesweeper-cell" key={index}>

            </div>
          );
        })}
      </div>
    </div>
  );
}
