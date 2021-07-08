import { useEffect,useState } from "react";
import React from "react";
import ReactDOM from 'react-dom';
const App = () => {
  const [text, setText] = useState("hola")
  const [count, setCount] = useState(0);

  useEffect(() =>{

    if(text=="hola") return; 
    setCount(count+1);

  },[text]);
  return (
    <div>
      <p>Componente {count} - {text}</p>
      <button onClick={() => setText("texto1")}>texto1</button>
      <button onClick={() => setText("texto2")}>texto2</button>
      <button onClick={() => setText("texto3")}>texto3</button>
      <button onClick={() => setText("texto4")}>texto4</button>
    </div>
  )
}
export default App;
class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      key: null,
      value: null,
    };
  }
  render() {
    return (
      <button className="square"
        onClick={() => this.setState({value: "X"})}>
        {this.state.value}
      </button>
    );
  }
}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
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
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
/*
import {React}
 class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      key: null,
      value: null,
    };
  }
  render() {
    return (
      <button className="square"
        onClick={() => this.setState({value: "X"})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
         <div>{/* status *///}</div>
//          <ol>{/* TODO */}</ol>
 //       </div>
//     </div>
//);
//  }
//}
//ReactDOM.render(
  //<Game />,
 // document.getElementById('root')
//);
//export default App;
/////////////////////////////////////////////////////////////////////////
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
