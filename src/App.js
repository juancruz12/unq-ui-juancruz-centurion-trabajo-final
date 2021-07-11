import { useEffect,useState,checkBox } from "react";
import React from "react";
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      key: false,
      value: null,
    };
  }
  changeNumber = () => {
    this.setState({value: Math.floor(Math.random() * 6) + 1});
  } 

  render() {
    return (
      <div>
      <button className="square">
        {this.state.value}
      </button>
      <button className="throw"
      onClick={() => this.changeNumber()}>
        Throw this
      </button>
      <input type="checkBox" onClick={()=>this.props.gameManager(this.state.key,this)}/>
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
    this.state.squares.concat(i);// Esto no lo deberia hacerla linea de abajo?
    return <Square value={this.state.squares[i]} gameManager = {this.gameManager}/>;
  }
  throwAll = () =>{
    this.state.squares.foreach (dice => (dice.changeNumber()))
  }
  render() {
    const status = 'Puntaje:';
  
    return (
      <div>
     
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          <button onClick ={()=>this.state.squares.map((dice) => dice.changeNumber()) }>
            Throw all
          </button>
        </div>
      </div>
    );
  }
  gameManager = (verify,dice) =>{
    const gameDice = this.state.squares;
    dice.setState({key:!dice.state.key})
    console.log(verify.toString());
    gameDice.filter(dice => dice.state.key === true );
    console.log(gameDice.map(dice=>dice.state.key.toString()))
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
