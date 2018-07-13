import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
import Sign from "./Sign";
import SignExpanded from "./SignExpanded";
import SignCollapsed from "./SignCollapsed";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wasClickedLeft: false,
      wasClickedRight: false
    };
    this.onReset = this.onReset.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  onReset = () => {
    this.setState({
      wasClickedLeft: false,
      wasClickedRight: false
    });
  };

  onClickLeft = () => {
    this.setState({ wasClickedLeft: !this.state.wasClickedLeft }, function() {
      if (
        this.state.wasClickedRight == true &&
        this.state.wasClickedLeft == true
      ) {
        this.setState({ wasClickedRight: false });
      }
    });
  };

  onClickRight = () => {
    this.setState({ wasClickedRight: !this.state.wasClickedRight }, function() {
      if (
        this.state.wasClickedRight == true &&
        this.state.wasClickedLeft == true
      ) {
        this.setState({ wasClickedLeft: false });
      }
    });
  };

  render() {
    let modalContent = null;

    if (
      this.state.wasClickedLeft == false &&
      this.state.wasClickedRight == false
    ) {
      modalContent = (
        <div className="Modal">
          <Sign
            handleInput={this.props.handleInput}
            handleSubmit={this.props.handleSubmit}
            type="signIn"
            onChange={this.onClickLeft}
          />
          <Sign
            handleInput={this.props.handleInput}
            handleSubmit={this.props.handleSubmit}
            type="signUp"
            onChange={this.onClickRight}
          />
        </div>
      );
    } else if (
      this.state.wasClickedLeft == false &&
      this.state.wasClickedRight == true
    ) {
      modalContent = (
        <div className="Modal">
          <SignCollapsed
            handleInput={this.props.handleInput}
            handleSubmit={this.props.handleSubmit}
            type="signIn"
            onChange={this.onClickLeft}
          />
          <SignExpanded
            handleInput={this.props.handleInput}
            handleSubmit={this.props.handleSubmit}
            type="signUp"
          />
        </div>
      );
    } else if (
      this.state.wasClickedLeft == true &&
      this.state.wasClickedRight == false
    ) {
      modalContent = (
        <div className="Modal">
          <SignExpanded
            handleInput={this.props.handleInput}
            handleSubmit={this.props.handleSubmit}
            type="signIn"
          />
          <SignCollapsed
            handleInput={this.props.handleInput}
            handleSubmit={this.props.handleSubmit}
            type="signUp"
            onChange={this.onClickRight}
          />
        </div>
      );
    }

    return <div className="Modal">{modalContent}</div>;
  }
}

Modal.propTypes = {
  onSubmit: PropTypes.func
};

export default Modal;
