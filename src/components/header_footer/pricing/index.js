import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";
import Box from "@material-ui/core/Box";

export default class Pricing extends Component {
  state = {
    prices: [25, 250, 1000],
    position: ["FIREFLY", "LIGHTER", "BURNER"],
    desc: [
      "We are depending on the extraordinary generosity of our community to ensure the future of Burning Man.",
      "We are depending on the extraordinary generosity of our community to ensure the future of Burning Man. ",
      "We are depending on the extraordinary generosity of our community to ensure the future of Burning Man. ",
    ],
    linkto: [
      "https://donate.burningman.org",
      "https://donate.burningman.org",
      "https://donate.burningman.org",
    ],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      //{return()} also works
      <Box display="flex" flexWrap="wrap">
        <Zoom delay={this.state.delay[i]} key={i}>
          <div className="pricing_item">
            <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                <span>${this.state.prices[i]}</span>
                <span>{this.state.position[i]}</span>
              </div>
              <div className="pricing_description">{this.state.desc[i]}</div>
              <div className="pricing_buttons">
                <MyButton
                  text="Purchase"
                  bck="#ffa800"
                  color="#ffffff"
                  link={this.state.linkto[i]}
                />
              </div>
            </div>
          </div>
        </Zoom>
      </Box>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Our future is up to you</h2>
        </div>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </Box>
      </div>
    );
  }
}
