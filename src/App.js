import { useEffect,useState,checkBox } from "react";
import React from "react";
import ReactDOM from 'react-dom';

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      key: false,
      value: Math.floor(Math.random() * 6) + 1,
      index: props.index
    };
  }
  changeNumber = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1
    this.setState({value: newNumber});
    this.props.actSquares(this);
  } 
  changeNumberInRender = (number) =>{
    this.setState({number});
  }
  checkAct = () =>{
    this.setState({key:!this.state.key});
    this.props.gameManager(this);
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
      <input type="checkBox" onClick={()=>this.checkAct()}/>
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
  renderSquare(pos) {
    return <Square value={this.state.squares[pos]}
                   gameManager = {this.gameManager}
                   actSquares = {this.actSquares}
                   index = {pos}
                   />;
  }

  throwAll = () =>{
    this.state.squares.foreach (dice => (dice.changeNumber()))
  }

  render() {
    const puntaje = 'Puntaje:';
    const tirada = 'Tirada:';
    const juegos = 'Juegos:';
  
    return (
      <div>
     
        <div className="status">{puntaje}</div>
        <div className="tirada">{tirada}</div>
        <div className="juegos">{juegos}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          <button onClick ={()=>this.state.squares.forEach((dice) => dice.changeNumber()) }>
            Throw all
          </button>
        </div>
      </div>
    );
  }
  gameManager = (dice) =>{
    const gameDice = this.state.squares;
    this.actSquares(dice);
    gameDice.filter(dice => dice.state.key === true );
    console.log(this.state.squares.map(dice=>dice.state.value))
    
  }
  actSquares = (square)=>{
    const squaresAct = this.state.squares.slice();
    if (squaresAct.includes(square)){
      squaresAct.map(dice=> {if(dice.state.index===square.state.index){dice.changeNumberInRender(square.state.value)}});
      console.log("el if dio true, el square actualizado esta en la lista");
    }else{
      console.log("el if dio false, el square actualizado no esta en la lista");
      squaresAct.push(square);
    }
    this.setState({squares:squaresAct}); 
      /*const squaresAct= this.state.squares.slice();
      squaresAct.map(dice=> {if(dice.props.index==square.props.index){dice.setState(square.state)}})
      squaresAct[square.props.index].setState(square.state) //ENCONTRAR FORMA DE AGREGAR DADOS EN LA LISTA Y QUE SIEMPRE SEAN 5
      squaresAct.push(square);
      this.setState({squares : squaresAct});*/
  };
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
