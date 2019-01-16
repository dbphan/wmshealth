import React from "react";
import { Image, Container } from "semantic-ui-react";

const style = { width: "100%", position: "absolute" };

const ImageExampleFluid = () => (
  <Container fluid>
    <Image
      centered
      disabled
      fluid
      src="./images/background.png"
      style={style}
    />
  </Container>
);

export default ImageExampleFluid;
