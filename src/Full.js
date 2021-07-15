import { useEffect,useState,checkBox } from "react";
import React from "react";
import ReactDOM from 'react-dom';

export class Full extends React.Component {
    constructor(props){
      super(props);
        this.points = 30;
    }
  
  
    render() {
      return (
        <div>
        <button className="full" onClick={this.verifyGame}>
          Full
        </button>
        </div>
      );
    }
    verifyGame = () =>{
       let gamesX=this.props.games.map(dice=>dice.value).splice();
        while(!this.gamesX){
           let number = gamesX[0]
            gamesX.shift()
            this.extractNumberAndLook(gamesX,number);
        }
        this.props.sumPoints(0);
    }
    extractNumberAndLook = (numbers,number) =>{
       let counter = 0
        numbers.forEach(dice => {if(dice===number){counter=counter+1}})
        if(counter===30 && this.secondPartOfFull(number,numbers)){
            this.props.sumPoints(this.points);
        }
    }
    secondPartOfFull = (number,numbers) =>{

    }
  }
