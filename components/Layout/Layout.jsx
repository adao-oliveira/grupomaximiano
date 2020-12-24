import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <a
        href="#"
        id="back-to-top"
        title="Back to top"
        style={{ display: "none" }}
      >
        <img src="https://img.icons8.com/nolan/64/circled-chevron-up--v3.png"/>
      </a>
    </>
  );
}
