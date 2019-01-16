import React from "react";
import styled from "styled-components";

// const OuterCircle = styled.div`
//   background: black;
//   border-radius: 50%;

//   height: 10px;
//   width: 10px;
//   position: absolute;
//   top: 61%;
//   left: 44%;
//   &:after {
//     content: "Austin";
//   }
// `;

// const InnerCircle = styled.div`
//   position: absolute;

//   background: red;
//   opacity: 0.2;
//   border-radius: 50%;
//   height: 100px;
//   width: 100px;
//   top: 50%;
//   left: 50%;
//   margin: -50px 0px 0px -50px;
// `;

const OuterCircle = {
  position: "absolute",
  background: "red",
  opacity: "0.2",
  borderRadius: "50%",
  height: "100px",
  width: "100px",
  top: "50%",
  left: "50%",
  margin: "-50px 0px 0px -50px"
};

const InnerCircle = {
  background: "black",
  borderRadius: "50%",
  height: "10px",
  width: "10px",
  position: "absolute",
  top: "61%",
  left: "44%",
  ":after": {
    content: "Austin"
  }
};

const Circle = () => (
  <div style={InnerCircle}>
    <div style={OuterCircle} />
  </div>
  // <OuterCircle>
  //   <InnerCircle />
  // </OuterCircle>
);

export default Circle;
