import { useState } from 'react'
import React, { Component } from "react";
import logo from './logo.svg'
import './App.css'

export default class Button extends Component {
    constructor() {
      super();
      this.state = { buttonText: "Click me, please" };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(() => {
        return { buttonText: "Thanks, been clicked!" };
      });
    }
  
    render() {
      const { buttonText } = this.state;
      return <button onClick={this.handleClick}>{buttonText}</button>;
    }
  }

