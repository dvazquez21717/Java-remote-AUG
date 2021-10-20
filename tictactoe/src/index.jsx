import React, {Component} from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';  
// import reportWebVitals from './reportWebVitals';
import giphy from '../src/assets/giphy.gif';
import 'react-bootstrap/dist/react-bootstrap.min.js';


// Home component

class Home extends Component {
  render(){
    return(
      <div>
        <h1>React Router TicTacToe</h1>
        <h4>"TicTacToe Urls for all winners!"</h4>
        <img 
        src= {giphy}
        alt="new"
      />
      </div>
    );
  }
}

class About extends Component {
  render(){
    return(
      <div>
        <h1>About Us</h1>
        <p>"We here at the Triple-T love playing with URLs, especially ones tied to awesome React Components."</p>
        <p>"Play a game of TicTacToe on our React Component that will follow you around the links."</p>
      </div>
    );
  }
}

// Menu component

class Links extends Component {
  render(){
    return(
      <div>
        <h1>Game</h1>
        <div className ="TTT"> </div>
        <p>"Check out our amazing TTT URLs:"
          <ul>
            <li>Lazy Loading</li>
            <li>Dynamic Route Matching</li>
            <li>"Location Transition Handling"</li>
          </ul>
        </p>
      </div>
    );
  }
}

class Nb extends Component {
  render(){
    return(
      // <div className="nav">
      //   <Link to="/">Home</Link> | 
      //   <Link to="links">Links</Link> | 
      //   <Link to="about">About</Link>
      // </div>

      <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/links">
      <Nav.Link>Links</Nav.Link>
      </LinkContainer>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Routes extends Component {
  render(){
    return(
      <Router>
        <div>
          <Nb />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Links" path="/links" component={Links}/>
          <Route name="About" path="/about" component={About} />
        </div>
      </Router>
    );
  }
}


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
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
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length-1];
    //slice() creates a copy of the squares array
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
          squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step){
      this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
      });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return(
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>    
            </li>
        )
    })

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<div><Routes /> <Game /></div>, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
