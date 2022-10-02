import React from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div classNameName="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
