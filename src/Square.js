import { useEffect,useState,checkBox } from "react";
import React from "react";
import ReactDOM from 'react-dom';

export class Square extends React.Component {
    constructor(props){
      super(props);
        this.keyD = false;
        this.value = Math.floor(Math.random() * 6) + 1;
        this.id = props.id
    }
    changeNumberInRender = () =>{
      this.value=Math.floor(Math.random() * 6) + 1 ;
    }
    checkAct = () =>{
      this.keyD= !this.keyD;
      this.props.gameManager(this);
    }
  
  
    render() {
      return (
        <div>
        <button className="square" onClick={console.log("ss")}>
          {this.value} 
        </button>
        
        <input type="checkBox" onClick={()=>this.checkAct()}/>
        
        </div>
      );
    }
  }
