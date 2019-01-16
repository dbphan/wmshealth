import React, { Component } from "react";
import logo from "./logo.svg";
import ImageExampleFluid from "./component/ImageExampleFluid";
import styled from "styled-components";
import Dot from "./component/shapes/Dot";

const Circle = styled.div`
  shape-outside: circle(50%);
  width: 300px;
  height: 300px;
  float: left;
  background: black;
`;

class App extends Component {
  render() {
    return (
      <div>
        <ImageExampleFluid />
        <Dot />
      </div>
    );
  }
}

export default App;
