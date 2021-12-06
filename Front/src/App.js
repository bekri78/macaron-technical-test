import React, { useState } from "react";
import Navigation from "./component/Navbar/navbar";
import HomePage from "./component/HomePage/homePage";
import IntroText from "./component/IntroText/introText";
import ContactUs from "./component/Form/form";
import InfoLieu from "./component/InfoLieu/infoLieu";
import Footer from "./component/Footer/Footer";

import Map from "./component/Map/map";

export default function App() {
  const [codeposteArray, setCodePostalArray] = useState([]);
  console.log(codeposteArray);
  return (
    <>
      <Navigation />
      <HomePage />
      <IntroText />
      <Map
        postaleCode={(code) => {
          setCodePostalArray(code);
        }}
      />
      <InfoLieu codeposteArray={codeposteArray} />
      <ContactUs />
      <Footer />
    </>
  );
}
