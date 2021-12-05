import React, { useState } from "react";
import Navigation from "./Navbar/navbar";
import HomePage from "./HomePage/homePage";
import IntroText from "./IntroText/introText";
import ContactUs from "./Form/form";
import InfoLieu from "./InfoLieu/infoLieu";

import Map from "./Map/map";

export default function App() {
  const [codeposteArray, setCodePostalArray] = useState([]);
  console.log(codeposteArray);
  return (
    <div>
      <Navigation />
      <HomePage />
      <IntroText />
      <Map
        postaleCode={(code) => {
          setCodePostalArray(code);
        }}
      />
      <ContactUs />
      <InfoLieu codeposteArray={codeposteArray} />
    </div>
  );
}
