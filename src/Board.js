import { useEffect,useState,checkBox } from "react";
import React from "react";
import {Square} from "./Square"
import {Poker} from "./Poker"

export class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: [{value:1, keyD:false, id:1},
                  {value:2, keyD:false, id:2},
                  {value:3, keyD:false, id:3},
                  {value:4, keyD:false, id:4},
                  {value:5, keyD:false, id:5}],
        diceGames:[],
        counter: 0,
        points:0
      };
    }
    renderSquare(dice) {
        return <Square gameManager = {this.gameManager}
                       actSquares = {this.actSquares}
                       //changeNumber = {this.changeNumber}
                       id = {dice.id}
                       keyD = {dice.keyD}
                       value = {dice.value}
                       />;
      }
    renderPoker(){
        return <Poker games= {this.state.diceGames}
                      sumPoints={this.sumPoints}/>
    }
    render() {
      const puntaje = 'Puntaje:'+this.state.points;
      const tirada = 'Tirada:'+ this.state.counter;
      const juegos = 'Juegos:';
    
      return (
        <div>
          <div className="status">{puntaje}</div>
          <div className="tirada">{tirada}</div>
          <div className="juegos">{juegos}</div>
          <div className="board-row">

           {this.state.squares.map(dice=>this.renderSquare(dice))}
           {this.renderPoker()}

            <button onClick ={this.actKeyAndCounter}>
              Throw all
            </button>
          </div>
        </div>
      );
    }
    actKeyAndCounter=()=>{
        this.sumCounter();   
        this.actKey();
    }
    actKey=()=>{
        this.state.squares.forEach(dice => 
            {if (!dice.keyD){
               {this.changeNumber(dice)}
             }}
             );
    }
    gameManager = (dice) =>{
      const gameDice = this.state.squares;
      this.actSquares(dice);
      gameDice.filter(dice => dice.keyD === true);
      this.setState({diceGames:gameDice})
      console.log(this.state.squares.map(dice=>dice.keyD))
    }
    actSquares = (square)=>{
      const squaresAct = this.state.squares.slice();
      squaresAct.map(dice=> {if(dice.id===square.id){this.changeNumber(square)}});
      /*if (squaresAct.includes(square)){
        squaresAct.map(dice=> {if(dice.id===square.id){dice.changeNumberInRender(square.value)}});
       
        console.log("el if dio true, el square actualizado esta en la lista");
      }else{
        console.log("el if dio false, el square actualizado no esta en la lista");
        squaresAct.push(square);
      }*/
     // this.setState({squares:squaresAct}); 
    };
    changeNumber = (diceX) => {
       let squaresAct = /*this.state.squares;*/ this.state.squares.filter(dice=>dice.id!=diceX.id).slice();
      /* let posPop = squaresAct.indexOf(diceX);
       squaresAct.splice(posPop, 1);  */
       let newDice = {value:Math.floor(Math.random() * 6) + 1, keyD: diceX.keyD,id:diceX.id}
       squaresAct.push(newDice);
       this.renderSquare(newDice)
        this.setState({squares: squaresAct}); // PORQUE CUANDO HAGO SETSTATE NO SE RE RENDERIZA LA PAGINA CON LOS NUEVOS DADOS?EL STATE SE ACTUALIZA PERO EL RENDER NO.
       // {this.sumCounter()}
        console.log("llego al setState")
      } 
    sumCounter = () =>{
        if(this.state.counter < 3){
        this.setState({counter: this.state.counter + 1})
        }else{this.setState({counter: "Se acabaron los turnos"})}
    }
    sumPoints = (number) =>{
        this.setState({points:this.state.points + number})
    }
  }