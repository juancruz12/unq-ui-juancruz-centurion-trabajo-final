import { useEffect,useState,checkBox } from "react";
import React from "react";
import ReactDOM from 'react-dom';
import {Board} from "./Board"

class App extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
         <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>     
        </div>
   );
  }
}
export default App


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
