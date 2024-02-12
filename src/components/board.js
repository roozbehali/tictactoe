//return html for board

const Board = ({ Cell }) => {

  return (
    <div className="board">
      <table>
          <tr>
            <Cell num={0}/>
            <Cell num={1}/>
            <Cell num={2}/>
          </tr>
          <tr>
            <Cell num={3}/>
            <Cell num={4}/>
            <Cell num={5}/>
          </tr>
          <tr>
            <Cell num={6}/>
            <Cell num={7}/>
            <Cell num={8}/>
          </tr>
      </table>
    </div>
  )
}

export default Board