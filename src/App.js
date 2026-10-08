import "./App.css";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import React from "react";
//comment

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
