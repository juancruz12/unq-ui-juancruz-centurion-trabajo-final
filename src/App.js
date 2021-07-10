import { useEffect,useState } from "react";
import React from "react";
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      key: null,
      value: null,
    };
  }
  changeNumber = () => {
    this.setState({value: Math.floor(Math.random() * 6) + 1});
  } 
  render() {
    return (
      <div>
      <button className="square"
        onClick={() => this.changeNumber()}>
        {this.state.value}
      </button>
      <button className="throw"
      onClick={() => this.changeNumber()}>
        Throw this
      </button>
      </div>
    );
  }
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: []
    };
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}/>;
  }

  render() {
    const status = 'Puntaje:';

  const throwAll = () =>{
      this.state.squares.foreach (dice => (dice.changeNumber()))
    }
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          <button onClick ={()=>this.state.squares.foreach(dice => dice.changeNumber()) }>
            Throw all
          </button>
        </div>
        
      </div>
    );
  }
}

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
