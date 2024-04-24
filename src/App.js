import React from 'react';
import Row from './components/Row';
import Col from './components/Col';
import { GridProvider } from './context/GridContext';
import './App.css'

function App() {
  return (
    <GridProvider gap={0}>
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
    </GridProvider>
  );
}

export default App;
