import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Motion, spring } from "react-motion";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

class SignExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexState: false,
      animIsFinished: false
    };
  }

  componentDidMount() {
    // console.log(this.props);
    this.setState({ flexState: !this.state.flexState });
  }

  isFinished = () => {
    this.setState({ animIsFinished: true });
  };

  render() {
    return (
      <Motion
        handleInput={this.props.handleInput}
        handleSubmit={this.props.handleSubmit}
        style={{
          flexVal: spring(this.state.flexState ? 8 : 1)
        }}
        onRest={this.isFinished}
      >
        {({ flexVal }) => (
          <div
            className={
              this.props.type == "signIn" ? "signInExpanded" : "signUpExpanded"
            }
            style={{
              flexGrow: `${flexVal}`
            }}
          >
            <Motion
              handleInput={this.props.handleInput}
              handleSubmit={this.props.handleSubmit}
              style={{
                opacity: spring(this.state.flexState ? 1 : 0, {
                  stiffness: 300,
                  damping: 17
                }),
                y: spring(this.state.flexState ? 0 : 50, {
                  stiffness: 100,
                  damping: 17
                })
              }}
            >
              {({ opacity, y }) => (
                <form
                  className="logForm"
                  style={{
                    WebkitTransform: `translate3d(0, ${y}px, 0)`,
                    transform: `translate3d(0, ${y}px, 0)`,
                    opacity: `${opacity}`
                  }}
                >
                  <h2>{this.props.type == "signIn" ? "SIGN IN" : "SIGN UP"}</h2>
                  <Input
                    id="login"
                    name="email"
                    type="text"
                    placeholder="LOGIN"
                    handleInput={this.props.handleInput}
                  />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="PASSWORD"
                    handleInput={this.props.handleInput}
                  />
                  <SubmitButton
                    handleSubmit={this.props.handleSubmit}
                    type={this.props.type}
                  />
                  <a href="url" className="forgotPass">
                    {this.props.type == "signIn" ? "Forgot password?" : ""}
                  </a>
                </form>
              )}
            </Motion>
          </div>
        )}
      </Motion>
    );
  }
}

SignExpanded.PropTypes = {
  type: PropTypes.string
};

export default SignExpanded;
