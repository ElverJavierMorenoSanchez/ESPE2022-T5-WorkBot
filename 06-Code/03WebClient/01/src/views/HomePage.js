import About from "../components/ComponentsHomePage/About";
import Banner from "../components/ComponentsHomePage/Banner";
import Contact from "../components/ComponentsHomePage/Contact";
import Menu from "../components/ComponentsHomePage/Menu";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <Menu />
      <Contact />
    </>
  );
}
