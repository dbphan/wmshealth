import React, { Component } from "react";
import styled from "styled-components";

const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: #555;
  border-radius: 50%;
`;

export default class Circle extends Component {
  render() {
    return (
      <div>
        <Circle />
      </div>
    );
  }
}
