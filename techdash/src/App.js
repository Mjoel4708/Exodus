import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Sidebar, Profile, Messages } from './components';
function App() {
  return (
    <Row>
      <Col style={{margin: "0px", padding: "0px"}}>
        <Sidebar />
      </Col>
      
      <Col style={{marginLeft: "-12px", paddingLeft: "0px", padding: "0px"}}>
        <Profile />
      </Col>
      <span class="border-left"></span>
      
      <Col style={{margin: "-1px", padding: "0px"}}>
        <Messages />
      </Col>
      <span class="border-left"></span>
    </Row>
  );
}

export default App;
