import React from "react";
import Navigation from "./Navbar/navbar";
import HomePage from "./HomePage/homePage";
import IntroText from "./IntroText/introText";
import ContactUs from "./Form/form";

import Map from "./Map/map";

export default function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
      <IntroText />
      <Map />
      <ContactUs />
    </div>
  );
}
