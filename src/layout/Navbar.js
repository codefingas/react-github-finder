import React, { Component } from "react";
import PropTypes from 'prop-types'


export class Navbar extends Component {
  static defaultProps = { //would take over if props are not passed
    icon: "fab fa-github",
    title: "Navbar",
  };

  static propTypes = {
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
  }

  render() {
    return (
      <nav className="bg-primary navbar">
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
