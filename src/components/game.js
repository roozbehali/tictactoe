import { useState, useEffect } from 'react'
import Board from './board'

const Game = () => {
  const [boardArray, setBoardArray] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const XO = xIsNext ? 'X' : 'O'
  const [xWins, setXWins] = useState(0)
  const [oWins, setOWins] = useState(0)
  const [Winner, setWinner] = useState(null)

  const Cell = (props) => {
    return <td className='cells' onClick={() => cellClick(props.num)}>{boardArray[props.num]}</td>
  }

  const cellClick = (num) => {
    //doesnt allow cellClick if occupied or game is over
    if(boardArray[num] || Winner){
      return;
    } else {
      let squares = [...boardArray]

      //switch X and O and fill array with corresponding character
      if(xIsNext) {
        squares[num] = 'X'
        setXIsNext(false)
      } else {
          squares[num] = 'O'
          setXIsNext(true)
      }
      //update state, check if game is won
      setBoardArray(squares)
      checkWinner(squares)
    }
  }

  //checking for winner when x or o is placed
  const checkWinner = (squares) => {
    const wConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8],
    ]
    for(let i = 0; i<8; i++){
      const [a,b,c] = wConditions[i]
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
        setWinner(squares[a])
      } else if (squares.every(element => element != null)){
          setWinner('Draw')
        }
      }
  }

  //default values on restart
  const restart = () => {
    //increment win counter
    if(Winner==='X'){
      setXWins(xWins+1)
    } else if(Winner==='O'){
      setOWins(oWins+1)
    }

    setBoardArray(Array(9).fill(null))
    setXIsNext(true)
    setWinner(null)
  }

  //game status
  const Statement = ({ Winner, xo }) => {
    {
      if(Winner && Winner!='Draw'){
        return(<p className='text'>{Winner} has won.</p>)
      } else if(Winner === 'Draw'){
        return(<p className='text'>It is a draw.</p>)
      } else {
        return(<p className='text'>It is {xo}'s turn.</p>)
      }
    }
  }

  return (
    <>
      <Statement Winner={Winner} xo={XO}></Statement>
      <Board Cell={Cell}/>
      <p className='text'>X: {xWins} O: {oWins}</p> 
      <button onClick={restart} className='button'>Restart game</button>
    </>
  )
}

export default Game