import React, { Component } from "react";
import "./App.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Motion, spring } from "react-motion";
import NavigationPanel from "./components/NavigationPanel";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      mounted: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }
  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    // this.setState({ mounted: false });

    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:3001/SignUp", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log("grabbing token");
        localStorage.token = res.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  handleLogin(e) {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
    this.setState({
      mounted: false
    });
    e.preventDefault();
    axios
      .post("http://localhost:3001/LogIn", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.token = res.data.token;
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { mounted } = this.state;

    let child;
    let test = 12;

    if (mounted) {
      child = (
        <div className="App_test">
          <NavigationPanel />
          <Modal
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img
              src="https://www.shareicon.net/download/2016/07/09/118949_virus_512x512.png"
              className="App-logo"
              alt="logo"
            />
            <h1 className="App-title">HEIR POLLUTION</h1>
          </header>
          <p className="App-intro">
            WELCOME TO HEIR POLLUTION. WHERE YOU HAVE INHERITED THE PREVIOUS
            GENERATIONS PROBLEMS{" "}
          </p>
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
