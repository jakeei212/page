import React from "react";
import icon_calendar from "../../../resources/images/icons/calendar.png";
import icon_location from "../../../resources/images/icons/location.png";
import Zoom from "react-reveal/Zoom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const Info = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="bck_black">

        <Box
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Zoom duration={500}>
                <div className="vn_item">
                  <div className="vn_outer">
                    <div className="vn_inner">
                      <div className="vn_icon_square bck_red"></div>
                      <div
                        className="vn_icon"
                        style={{
                          background: `url(${icon_calendar})`,
                        }}
                      ></div>
                      <div className="vn_title">Event Data & Time</div>
                      <div className="vn_desc">05 September 2020</div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Box>

            <Box>
              <Zoom duration={1000}>
                <div className="vn_item">
                  <div className="vn_outer">
                    <div className="vn_inner">
                      <div className="vn_icon_square bck_yellow"></div>
                      <div
                        className="vn_icon"
                        style={{
                          background: `url(${icon_location})`,
                        }}
                      ></div>
                      <div className="vn_title">Event Location</div>
                      <div className="vn_desc">Black Rock City Nevada</div>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Box>
          </Box>
        </Box>

      </div>
    </div>
  );
};

export default Info;
