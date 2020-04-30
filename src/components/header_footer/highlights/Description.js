import React from "react";
import Fade from "react-reveal/Fade";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const Description = () => {
  return (
    <Box display="flex">
      <Container maxWidth="sm">
        <Fade>
          <div className="center_wrapper">
            <h2>Highlights</h2>
            <div className="highlight_description">
              Burning Man is a network of people inspired by the values
              reflected in the <strong><a href="https://burningman.org/culture/philosophical-center/10-principles">Ten Principles</a></strong> and united in the pursuit of a
              more creative and connected existence in the world. Throughout the
              year we work to build Black Rock City, home of the largest annual
              Burning Man gathering, and nurture the distinctive culture
              emerging from that experience. The hub of this global network is
              the 501(c)(3) non-profit Burning Man Project, headquartered in San
              Francisco, California.
            </div>
          </div>
        </Fade>
      </Container>
    </Box>
  );
};

export default Description;
