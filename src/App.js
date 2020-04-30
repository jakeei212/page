import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/header";
import Featured from "./components/header_footer/featured";
import Info from "./components/header_footer/info";
import HighLights from "./components/header_footer/highlights";
import Pricing from "./components/header_footer/pricing";
import Location from "./components/header_footer/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "1500px",
        width: "100%",
      }}
    >
      <Header />

      <Element name="event">
        <Featured />
      </Element>

      <Element name="info">
        <Info />
      </Element>

      <Element name="highlights">
        <HighLights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
