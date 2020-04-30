import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Button } from "@material-ui/core";
import MyButton from "../utils/MyButton";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Pulse from "react-reveal/Pulse";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
    counter: 0,
  };

  precentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        counter: this.state.counter + 1,
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.precentage();
    }, 50);
  }

  render() {
    return (
      <div style={{ width: "101%" }}>
        <Container maxWidth="md">
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="row"
            flexWrap="nowrap"
          >
            <Box display="flex" alignItems="flex-start" >
              <Fade>
                <div className="discount_wrapper">
                  <div className="discount_porcentage ">
                    <Pulse
                      spy={() => this.precentage()}
                      onReveal={() => this.precentage()}
                    >
                      <FavoriteIcon
                        className="pulse"
                        style={{
                          display: "block",
                          color: "red",
                          width: "100px",
                          height: "auto",
                        }}
                      ></FavoriteIcon>
                    </Pulse>
                  </div>
                </div>
              </Fade>
            </Box>

            <Slide right>
              <div className="discount_wrapper">
                <div className="discount_description ">
                  <h3>We’re in this together</h3>
                  <p>
                    Sadly we will not be gathering in the Black Rock Desert in
                    2020 due to COVID-19. Though this will result in an
                    unprecedented revenue shortfall for Burning Man Project, we
                    remain optimistic, and are committed to maintaining the
                    critical infrastructure we’ll need to produce Black Rock
                    City 2021 and continuing our vital off-playa work in the
                    year ahead. We can’t do this without your help.
                  </p>

                  <MyButton
                    text="DONATE NOW"
                    bck="#ffa800"
                    color="#ffffff"
                    link="https://donate.burningman.org"
                  />
                </div>
              </div>
            </Slide>
          </Box>
        </Container>
      </div>
    );
  }
}
