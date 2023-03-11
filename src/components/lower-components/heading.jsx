import React, { Component } from "react";

class Heading extends Component {
  render() {
    const { heading } = this.props;
    return (
      <div className="heading">
        <h1 className="h1">{heading.h1}</h1>
        <h2 className="p">{heading.p}</h2>
      </div>
    );
  }
}

export default Heading;
