import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import PremierLeagueStanding from "./PremierLeagueStanding";

const App = () => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Football Standings</Navbar.Brand>
      </Container>
    </Navbar>
    <PremierLeagueStanding />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
