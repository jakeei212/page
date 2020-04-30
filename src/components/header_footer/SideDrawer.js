import React, { memo } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("event")}>
          EVENT
        </ListItem>
        <ListItem button onClick={() => scrollToElement("info")}>
          INFO
        </ListItem>
        <ListItem button onClick={() => scrollToElement("highlights")}>
          HIGHLIGHTS
        </ListItem>
        <ListItem button onClick={() => scrollToElement("pricing")}>
          SUPPORT
        </ListItem>
        <ListItem button onClick={() => scrollToElement("location")}>
          LOCATION
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
