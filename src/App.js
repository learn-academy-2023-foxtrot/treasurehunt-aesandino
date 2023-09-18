import React, { useState } from "react"
import Square from "./components/Square.js"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasure, setTresure] = useState()

  const handleClick = (selectedIndex) => {
    //return something

    //tresure location
        let treasureIndex = Math.floor(Math.random() * board.length)
        console.log("treasure", treasureIndex)

    if(treasureIndex === selectedIndex) {
      board[selectedIndex]="*"
      


    }
    board[selectedIndex]="✨"
    setBoard([...board])
    }


  return (
    <>
      <h1>Treasure Hunt Game</h1>
     <Square board={board}/>
    </>
  )
}

export default App
