import React from "react";
import Row from "./components/Row";
import Col from "./components/Col";
import { GridProvider } from "./context/GridContext";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  return (
    <GridProvider gapRow={0} gapColumn={10}>
      <Grid>
        <Row>
          <Col size="12" sm={6} md={3}>
            <div className="paper">xs=12</div>
          </Col>
        </Row>
        <Row>
          <Col size="6">
            <div className="paper">xs=6</div>
          </Col>
          <Col size="6">
            <div className="paper">xs=6</div>
          </Col>
        </Row>
        <Row>
          <Col size="3">
            <div className="paper">xs=3</div>
          </Col>
          <Col size="3">
            <div className="paper">xs=3</div>
          </Col>
          <Col size="3">
            <div className="paper">xs=3</div>
          </Col>
          <Col size="3">
            <div className="paper">xs=3</div>
          </Col>
        </Row>
      </Grid>
    </GridProvider>
  );
}

export default App;
