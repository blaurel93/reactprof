import React from 'react';

import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { Container } from "reactstrap";
import "./assets/style.css"
function App() {
  return (
    <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1">
          <Content />
        </Container>
        <Footer />
      </div>
  );
}

export default App;
