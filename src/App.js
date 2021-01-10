import React from "react";

import { Navegabar } from "./components/shared/Navbar";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

import "./css/App.css";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Navegabar />
        <Home />
        <Footer />
      </div>
    );
  }
}
